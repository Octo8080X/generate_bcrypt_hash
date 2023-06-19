import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.0/mod.ts";

const args = Deno.args

if(args.length !== 1){
  console.error("%cArgs Error! ex. cli.ts password", "color: red;" )
  Deno.exit()
}

console.log(await bcrypt.hash(args[0]));
