import { TopEnv, CoreEnv, nil, undef, debug, max_trace_size, suppress_deprecation_warning } from "./header.js";
import { VERSION, GitCommit } from "./version.js";

import { isNil, isUndef, isBoolean, isString, isFunction, isChar, isSymbol, isPort, isPair, isList,
         isVector, isHashtable, isMutableHashtable, isClosure, makeClosure, isProcedure,
         isSelfEvaluating, eq, eqv, equal, lt } from "./system/_types.js"
import { to_write, to_display, write_ss, to_write_ss, inspect } from "./system/_writer.js"
import Call from "./system/call.js"
import Char from "./system/char.js"
import Compiler from "./system/compiler.js"
import { Enumeration, isEnumSet } from "./system/enumeration.js"
import { BiwaError, Bug, UserError } from "./system/error.js"
import Hashtable from "./system/hashtable.js"
import Interpreter from "./system/interpreter.js"
import { Complex, Rational, isNumber, isComplex, isReal, isRational, isInteger } from "./system/number.js"
import { Pair, List, array_to_list, deep_array_to_list, Cons } from "./system/pair.js"
import Parser from "./system/parser.js"
import Pause from "./system/pause.js"
import { Port, eof } from "./system/port.js"
import { BiwaPromise, isPromise } from "./system/promise.js"
import { Record, isRecord, isRecordTD, isRecordCD } from "./system/record.js"
import BiwaSet from "./system/set.js"
import { BiwaSymbol, Sym, gensym } from "./system/symbol.js"
import Syntax from "./system/syntax.js"
import Values from "./system/values.js"

import "./library/extra_lib.js"
import "./library/js_interface.js"
import "./library/r6rs_lib.js"
import "./library/srfi.js"

// For unit testing
import { reduce_cyclic_info, find_cyclic } from "./system/_writer.js"
import { define_libfunc, define_scmfunc, parse_fraction, is_valid_integer_notation, parse_integer, is_valid_float_notation, parse_float } from "./library/infra.js"

export default {
  TopEnv, CoreEnv, nil, undef, debug, max_trace_size, suppress_deprecation_warning,
  Version: VERSION, VERSION, GitCommit,
  isNil, isUndef, isBoolean, isString, isChar, isSymbol, isPort, isPair, isList,
    isVector, isHashtable, isMutableHashtable, isClosure, makeClosure, isProcedure,
    isSelfEvaluating, eq, eqv, equal, lt,
  to_write, to_display, write_ss, to_write_ss, inspect,
  Call,
  Char,
  Compiler,
  Enumeration, isEnumSet,
  Error: BiwaError, Bug, UserError,
  Hashtable,
  Interpreter,
  Complex, Rational, isNumber, isComplex, isReal, isRational, isInteger,
  Pair, List, array_to_list, deep_array_to_list, Cons,
  Parser,
  Pause,
  Port, eof,
  Promise: BiwaPromise, isPromise,
  Record, isRecord, isRecordTD, isRecordCD,
  Set: BiwaSet,
  Symbol: BiwaSymbol, Sym, gensym,
  Syntax,
  Values,

  reduce_cyclic_info, find_cyclic,
  define_libfunc, define_scmfunc, parse_fraction, is_valid_integer_notation, parse_integer, is_valid_float_notation, parse_float,
};
