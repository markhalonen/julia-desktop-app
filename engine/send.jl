using ZMQ
using JSON
s2=Socket(REQ)

connect(s2, "tcp://localhost:5555")

send(s2, JSON.json(Dict("x" => 2, "y" => 4)))
msg = ZMQ.recv(s2, String)
println(msg)

close(s2)