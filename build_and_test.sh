#! /bin/sh -e

docker run -it "$(docker build -q .)" deno run -A  _build_and_test.ts
