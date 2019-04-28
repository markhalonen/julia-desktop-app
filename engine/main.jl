using ZMQ
using JSON

s1=Socket(REP)

bind(s1, "tcp://*:5555")

try
    while true
        msg = recv(s1, String)
        println(msg)
        j = JSON.parse(msg)
        x = j["x"]
        y = j["y"]
        ZMQ.send(s1, JSON.json(Dict("result" => x + y)))
    end
finally
    close(s1)
end 
