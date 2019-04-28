using ZMQ

ctx = Context(1)
s = Socket(ctx, REP)
ZMQ.bind(s, "tcp://*:5555")

while true
  msg = ZMQ.recv(s)
  println(msg)
end