
# josnlib
[`josnlib`](https://www.npmjs.com/package/josnlib) is a helper library for [`iaseth/josn`](https://github.com/iaseth/josn),
written in `JavaScript` and `TypeScript`.
`josnlib` can be used in the browser as well as in `NodeJS`.

`josnlib` depends on [`whichtype`](https://github.com/iaseth/whichtype), [`jslice`](https://github.com/iaseth/jslice)
and [`jtransform`](https://github.com/iaseth/jtransform), all of which were originally part of [`iaseth/josn`](https://github.com/iaseth/josn),
but were later made separate packages to allow for easier testing and code reuse.

I am using [`readmix`](https://github.com/iaseth/readmix) for generating this README.
You can view the source file [here](https://github.com/iaseth/josnlib/blob/master/README.md.rx).


## Table of contents
* [josnlib](#josnlib)
    * [Table of contents](#table-of-contents)
    * [Installation](#installation)
    * [List of flags](#list-of-flags)
    * [Package details](#package-details)
    * [Dependencies](#dependencies)
    * [Dev dependencies](#dev-dependencies)
    * [License](#license)


## Installation
You can install [`josnlib`](https://www.npmjs.com/package/josnlib) with the following command:
```
npm i josnlib
```


## List of flags

| Short | Long | Description |
| ----- | ---- | ----------- |
| -c | --console | Use console.log() for printing selected object. |
| -d | --dir | Use console.dir() for printing selected object. |
| -D | --debug | Turns debug mode ON. |
| -E | --exact | Turns exact mode ON. |
| -F | --force | Force update files. |
| -g | --green | Green is for the environment. |
| -h | --help | Show help. |
| -i | --ignore-case | Ignore case (default). |
|  | --license | Print the LICENSE. |
| -l | --list | List all input files. |
| -m | --minify | Minify the output. |
| -n | --no-ignore-case | Do not ignore case. |
| -p | --plaintext | Output plaintext. |
|  | --print-args | Just print the arguments. |
|  | --print-demos | Just print the demos. |
|  | --print-flags | Just print the flags. |
| -q | --quiet | Turns quiet mode ON. |
| -s | --spaces2 | Indent with 2 spaces. |
| -S | --spaces4 | Indent with 4 spaces. |
| -t | --table | Print output as a table. |
| -T | --tabs | Indent with Tabs. |
| -v | --version | Print version. |
| -w | --watch | Watch input files for changes. |
| -x | --experimental | Turns experimental mode ON. |
| -Z | --zen | Turns zen mode ON. |


## Package details
| `Name`         | `Value`                             |
| -------------- | ----------------------------------- |
| `Name`         | `josnlib`                           |
| `Version`      | `0.14.0`                            |
| `Author`       | `iaseth`                            |
| `Homepage`     | `https://github.com/iaseth/josnlib` |
| `Repository`   | `iaseth/josnlib`                    |
| `License`      | `MIT`                               |
| `Dependencies` | `4`                                 |



## Dependencies
|     | `Package`    | `Version`   |
| --- | ------------ | ----------- |
| 1   | `jslice`     | `^0.11.0`   |
| 2   | `json5`      | `^2.2.3`    |
| 3   | `jtransform` | `^0.3.0`    |
| 4   | `whichtype`  | `^1.5.0`    |



## Dev dependencies
|     | `Package`     | `Version`   |
| --- | ------------- | ----------- |
| 1   | `@types/jest` | `^29.5.1`   |
| 2   | `jest`        | `^29.5.0`   |



## License
MIT License

Copyright (c) Ankur Seth.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Credit

This file was generated using [`readmix`](https://github.com/iaseth/readmix).


