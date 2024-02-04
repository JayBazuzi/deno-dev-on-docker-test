await run_deno([
  "test",
  "--allow-all",
  "--parallel",
  "--ignore=_build_and_test.ts",
]);
await run_deno(["lint", "--ignore=/deno-dir/"]);
// TODO: Fix formatting
// await run_deno(["fmt", "--check", "--ignore=/deno-dir/"]);

function run_deno(args: Array<string>) {
  const output = new Deno.Command(
    Deno.execPath(),
    {
      args: args,
      stdout: "inherit",
      stderr: "inherit",
    },
  ).outputSync();

  if (output.code != 0) {
    Deno.exit(output.code);
  }
}
