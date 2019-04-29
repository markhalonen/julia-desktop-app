using Joseki, JSON, HTTP

# 'http://localhost:8000/pow/?x=2&y=3'
function pow(req::HTTP.Request)
    j = HTTP.queryparams(HTTP.URI(req.target))
    has_all_required_keys(["x", "y"], j) || return error_responder(req, "You need to specify values for x and y!")
    x = parse(Float32, j["x"])
    y = parse(Float32, j["y"])
    json_responder(req, x^y)
end


# Make a router and add routes for our endpoints.
endpoints = [
    (pow, "GET", "/pow"),
]
r = Joseki.router(endpoints)

Base.@ccallable function julia_main(ARGS::Vector{String})::Cint
    # Fire up the server
    HTTP.serve(r, "127.0.0.1", 8000; verbose=false)
    return 0
end