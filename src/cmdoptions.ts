import { isDoubleFlag, isSingleFlag } from 'whichtype';
import flagsJson from './flags.json';

const whichtype = require("whichtype");



export function classifyArgs (args: string[]): string[][] {
	if (!whichtype.isArrayOfStrings(args)) {
		return [[], []];
	}

	const flagArgs = args.filter(whichtype.isFlag);
	const nonFlagArgs = args.filter(whichtype.isNotFlag);
	return [flagArgs, nonFlagArgs];
}

export class CmdOptions {
	console: boolean = false;        // use console.log() for printing selected object
	dir: boolean = false;            // use console.dir() for printing selected object
	debug: boolean = false;          // debug mode on/off
	exact: boolean = false;          // exact mode on/off
	force: boolean = false;          // force update even if output file exists and is newer than input file
	green: boolean = false;          // green is for the environment
	help: boolean = false;
	ignoreCase: boolean = false;
	list: boolean = false;           // just list all the input files
	license: boolean = false;        // just print the license
	minify: boolean = false;
	noIgnoreCase: boolean = false;
	plaintext: boolean = false;      // Output plaintext
	printArgs: boolean = false;
	printDemos: boolean = false;
	printFlags: boolean = false;
	quiet: boolean = false;          // Quiet mode on/off
	spaces2: boolean = false;
	spaces4: boolean = false;
	table: boolean = false;
	tabs: boolean = false;
	version: boolean = false;        // print JOSN version
	watch: boolean = false;          // watch files for changes
	experimental: boolean = false;   // experimental mode on/off
	zen: boolean = false;            // zen mode on/off
}

export interface FlagType {
	isCommand: boolean,
	name: string,
	singleFlag: string,
	doubleFlag: string,
	description: string
}

export const flags: FlagType[] = flagsJson.flags;

export function getCmdOptions (flagArgs: string[]) : CmdOptions {
	const cmdOptions: CmdOptions = new CmdOptions();

	const singleFlags = flagArgs.filter(isSingleFlag);
	const singleFlagsString = singleFlags.join("");
	const doubleFlags = flagArgs.filter(isDoubleFlag);

	flags.forEach(flag => {
		const singleFlagChar = flag.singleFlag[1];
		if (singleFlagsString.includes(singleFlagChar) || doubleFlags.includes(flag.doubleFlag)) {
			(cmdOptions as any)[flag.name] = true;
		}
	});

	return cmdOptions;
}
