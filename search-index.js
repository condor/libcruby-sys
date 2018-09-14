var N = null;var searchIndex = {};
searchIndex["libcruby_sys"]={"doc":"","items":[[3,"VALUE","libcruby_sys","",N,N],[3,"ID","","",N,N],[3,"ANYARGS","","",N,N],[3,"ruby_value_type","","Data types used within the Ruby C interpreter",N,N],[3,"st_retval","","Generally used as return values from traversing callbacks",N,N],[7,"T_OBJECT","","This type denotes an ordinary Ruby object.",N,N],[7,"T_CLASS","","This type denotes a Ruby `Class`.",N,N],[7,"T_MODULE","","This type denotes a Ruby `Module`.",N,N],[7,"T_FLOAT","","This type denotes a Ruby `Float`.",N,N],[7,"T_STRING","","This type denotes a Ruby `String`.",N,N],[7,"T_REGEXP","","This type denotes a Ruby regular expression (`Regexp`).",N,N],[7,"T_ARRAY","","This type denotes a Ruby `Array`.",N,N],[7,"T_HASH","","This type denotes a Ruby `Hash`.",N,N],[7,"T_STRUCT","","This type denotes a Ruby `Struct`.",N,N],[7,"T_BIGNUM","","This type denotes a Ruby `Bignum`.",N,N],[7,"T_FILE","","This type denotes a Ruby `IO`.",N,N],[7,"T_DATA","","This type denotes a Ruby `Data` object.",N,N],[7,"T_MATCH","","This type denotes a Ruby `MatchData` object.",N,N],[7,"T_COMPLEX","","This type denotes a Ruby complex number (`Complex`).",N,N],[7,"T_RATIONAL","","This type denotes a Ruby rational number (`Rational`).",N,N],[7,"T_NIL","","This type denotes a Ruby `nil`.",N,N],[7,"T_TRUE","","This type denotes a Ruby `true`.",N,N],[7,"T_FALSE","","This type denotes a Ruby `false`.",N,N],[7,"T_SYMBOL","","This type denotes a Ruby `Symbol`.",N,N],[7,"T_FIXNUM","","This type denotes a Ruby `Fixnum` (31-bit or 63-bit integer).",N,N],[7,"T_NONE","","This type is generally only for use in Ruby internals",N,N],[7,"T_UNDEF","","This type denotes undefined.",N,N],[7,"T_IMEMO","","This type is generally only for use in Ruby internals",N,N],[7,"T_NODE","","This type denotes a Ruby syntax tree node.",N,N],[7,"T_ICLASS","","This type denotes an included Ruby module.",N,N],[7,"T_ZOMBIE","","This type denotes a Ruby object awaiting finalization.",N,N],[7,"Qfalse","","",N,N],[7,"Qtrue","","",N,N],[7,"Qnil","","",N,N],[7,"rb_mKernel","","The `Kernel` module",N,N],[7,"rb_mComparable","","The `Comparable` module",N,N],[7,"rb_mEnumerable","","The `Enumerable` module",N,N],[7,"rb_mErrno","","The `Errno` module",N,N],[7,"rb_mFileTest","","The `FileTest` module",N,N],[7,"rb_mGC","","The `GC` module",N,N],[7,"rb_mMath","","The `Math` module",N,N],[7,"rb_mProcess","","The `Process` module",N,N],[7,"rb_mWaitReadable","","The `IO::WaitReadable` module",N,N],[7,"rb_mWaitWritable","","The `IO::WaitWritable` module",N,N],[7,"rb_cBasicObject","","The `BasicObject` class",N,N],[7,"rb_cObject","","The `Object` class",N,N],[7,"rb_cArray","","The `Array` class",N,N],[7,"rb_cBinding","","The `Binding` class",N,N],[7,"rb_cClass","","The `Class` class",N,N],[7,"rb_cDir","","The `Dir` class",N,N],[7,"rb_cEncoding","","The `Encoding` class",N,N],[7,"rb_cEnumerator","","The `Enumerator` class",N,N],[7,"rb_cFalseClass","","The `FalseClass` class",N,N],[7,"rb_cFile","","The `File` class",N,N],[7,"rb_cComplex","","The `Complex` class",N,N],[7,"rb_cFloat","","The `Float` class",N,N],[7,"rb_cHash","","The `Hash` class",N,N],[7,"rb_cIO","","The `IO` class",N,N],[7,"rb_cInteger","","The `Integer` class",N,N],[7,"rb_cMatch","","The `MatchData` class",N,N],[7,"rb_cMethod","","The `Method` class",N,N],[7,"rb_cModule","","The `Module` class",N,N],[7,"rb_cNilClass","","The `NilClass` class",N,N],[7,"rb_cNumeric","","The `Numeric` class",N,N],[7,"rb_cProc","","The `Proc` class",N,N],[7,"rb_cRandom","","The `Random` class",N,N],[7,"rb_cRange","","The `Range` class",N,N],[7,"rb_cRational","","The `Rational` class",N,N],[7,"rb_cRegexp","","The `Regexp` class",N,N],[7,"rb_cStat","","The `File::Stat` class",N,N],[7,"rb_cString","","The `String` class",N,N],[7,"rb_cStruct","","The `Struct` class",N,N],[7,"rb_cSymbol","","The `Symbol` class",N,N],[7,"rb_cThread","","The `Thread` class",N,N],[7,"rb_cTime","","The `Time` class",N,N],[7,"rb_cTrueClass","","The `TrueClass` class",N,N],[7,"rb_cUnboundMethod","","The `UnboundMethod` class",N,N],[7,"rb_eException","","The `Exception` class",N,N],[7,"rb_eStandardError","","The `StandardError` exception class",N,N],[7,"rb_eSystemExit","","The `SystemExit` exception class",N,N],[7,"rb_eInterrupt","","The `Interrupt` exception class",N,N],[7,"rb_eSignal","","The `Signal` exception class",N,N],[7,"rb_eArgError","","The `ArgumentError` exception class",N,N],[7,"rb_eEOFError","","The `EOFError` exception class",N,N],[7,"rb_eIndexError","","The `IndexError` exception class",N,N],[7,"rb_eStopIteration","","The `StopIteration` exception class",N,N],[7,"rb_eKeyError","","The `KeyError` exception class",N,N],[7,"rb_eRangeError","","The `RangeError` exception class",N,N],[7,"rb_eIOError","","The `IOError` exception class",N,N],[7,"rb_eRuntimeError","","The `RuntimeError` exception class",N,N],[7,"rb_eSecurityError","","The `SecurityError` exception class",N,N],[7,"rb_eSystemCallError","","The `SystemCallError` exception class",N,N],[7,"rb_eThreadError","","The `ThreadError` exception class",N,N],[7,"rb_eTypeError","","The `TypeError` exception class",N,N],[7,"rb_eZeroDivError","","The `ZeroDivisionError` exception class",N,N],[7,"rb_eNotImpError","","The `NotImplementedError` exception class",N,N],[7,"rb_eNoMemError","","The `NoMemoryError` exception class",N,N],[7,"rb_eNoMethodError","","The `NoMethodError` exception class",N,N],[7,"rb_eFloatDomainError","","The `FloatDomainError` exception class",N,N],[7,"rb_eLocalJumpError","","The `LocalJumpError` exception class",N,N],[7,"rb_eSysStackError","","The `SystemStackError` exception class",N,N],[7,"rb_eRegexpError","","The `RegexpError` exception class",N,N],[7,"rb_eEncodingError","","The `EncodingError` exception class",N,N],[7,"rb_eEncCompatError","","The `Encoding::CompatibilityError` exception class",N,N],[7,"rb_eScriptError","","The `ScriptError` exception class",N,N],[7,"rb_eNameError","","The `NameError` exception class",N,N],[7,"rb_eSyntaxError","","The `SyntaxError` exception class",N,N],[7,"rb_eLoadError","","The `LoadError` exception class",N,N],[7,"rb_eMathDomainError","","The `Math::DomainError` exception class",N,N],[5,"RB_TYPE_P","","Returns a C boolean (zero if false, non-zero if true) indicating whether the object is of the internal Ruby type.",N,N],[5,"CLASS_OF","","Returns the Ruby class of the object.",N,N],[5,"RSTRING_LEN","","Returns the byte length of the Ruby `String`.",N,N],[5,"RSTRING_PTR","","Returns a pointer to the Ruby `String` data.",N,N],[5,"RARRAY_LEN","","Returns the number of elements in the Ruby `Array`.",N,N],[5,"RHASH_SIZE","","Returns the number of elements in the Ruby `Hash`.",N,N],[5,"rb_intern","","Converts an ASCII-encoded, nul-terminated C string to an [`ID`].",N,N],[5,"rb_intern2","","Converts an ASCII-encoded C string of the given length to an [`ID`].",N,N],[5,"rb_intern_str","","Convert a string to an [`ID`].",N,N],[5,"rb_sym2id","","Convert a `Symbol` to an [`ID`].",N,N],[5,"rb_id2sym","","Convert an [`ID`] to a `Symbol`.",N,N],[5,"rb_id2str","","Convert an [`ID`] to a Ruby `String`.",N,N],[5,"rb_define_class","","Defines a new class.",N,N],[5,"rb_define_method","","Defines a public method on a class.",N,N],[5,"rb_define_module_function","","Defines a method on a module, both on the module itself and as a private method for use by anything including the module.",N,N],[5,"rb_undef_method","","Undefines the named method on a class.",N,N],[5,"rb_obj_classname","","Gets the object's class' name",N,N],[5,"rb_block_given_p","","Returns a C boolean (zero if false, non-zero if true) indicated whether yield would execute a block in the current method.",N,N],[5,"rb_ary_new","","Constructs a new, empty array.",N,N],[5,"rb_ary_new_capa","","Constructs a new, empty array with the specified capacity.",N,N],[5,"rb_ary_push","","Pushes an item on to the end of an array, returning the array itself.",N,N],[5,"rb_ary_entry","","Returns the element at the given index or `nil` if the index is out-of-bounds for the array.",N,N],[5,"rb_hash_new","","Constructs a new, empty hash.",N,N],[5,"rb_hash_aset","","Inserts a key-value pair into the hash.",N,N],[5,"rb_hash_foreach","","Executes a function on each key-value pair in a hash.",N,N],[5,"rb_utf8_str_new","","Constructs a new Ruby string from a UTF-8 encoded C string of a given length.",N,N],[5,"rb_class_new_instance","","Constructs a new instance of a class by calling its allocator and constructor (`alloc` and `initialize`) as `::new` normally would.",N,N],[5,"rb_const_get","","Fetches a constant from a module or class.",N,N],[5,"rb_inspect","","Returns a human-readable Ruby string representation of an object, similarly to Ruby's `Object#inspect`.",N,N],[5,"rb_obj_class","","Looks up the nearest ancestor class of the object, skipping singleton classes or module inclusions.",N,N],[5,"rb_define_singleton_method","","Defines a singleton method on a class.",N,N],[5,"rb_enc_get_index","","Returns the encoding index of the provided Ruby object",N,N],[5,"rb_utf8_encindex","","Returns the encoding index for UTF-8",N,N],[7,"ST_CONTINUE","","Generally used as a return value from traversing callbacks to indicate that traversing should continue.",N,N],[7,"ST_STOP","","Generally used as a return value from traversing callbacks to indicate that traversing should stop.",N,N],[7,"ST_DELETE","","Generally used as a return value from traversing callbacks to indicate that traversing should stop.",N,N],[7,"ST_CHECK","","Generally used as a return value from traversing callbacks. It's unclear when this should be used in user-defined code.",N,N],[11,"clone","","",0,[[["self"]],["value"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"eq","","",0,[[["self"],["value"]],["bool"]]],[11,"ne","","",0,[[["self"],["value"]],["bool"]]],[11,"cmp","","",0,[[["self"],["value"]],["ordering"]]],[11,"partial_cmp","","",0,[[["self"],["value"]],["option",["ordering"]]]],[11,"lt","","",0,[[["self"],["value"]],["bool"]]],[11,"le","","",0,[[["self"],["value"]],["bool"]]],[11,"gt","","",0,[[["self"],["value"]],["bool"]]],[11,"ge","","",0,[[["self"],["value"]],["bool"]]],[11,"hash","","",0,N],[11,"clone","","",1,[[["self"]],["id"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"eq","","",1,[[["self"],["id"]],["bool"]]],[11,"ne","","",1,[[["self"],["id"]],["bool"]]],[11,"cmp","","",1,[[["self"],["id"]],["ordering"]]],[11,"partial_cmp","","",1,[[["self"],["id"]],["option",["ordering"]]]],[11,"lt","","",1,[[["self"],["id"]],["bool"]]],[11,"le","","",1,[[["self"],["id"]],["bool"]]],[11,"gt","","",1,[[["self"],["id"]],["bool"]]],[11,"ge","","",1,[[["self"],["id"]],["bool"]]],[11,"hash","","",1,N],[11,"clone","","",2,[[["self"]],["anyargs"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"eq","","",2,[[["self"],["anyargs"]],["bool"]]],[11,"ne","","",2,[[["self"],["anyargs"]],["bool"]]],[11,"cmp","","",2,[[["self"],["anyargs"]],["ordering"]]],[11,"partial_cmp","","",2,[[["self"],["anyargs"]],["option",["ordering"]]]],[11,"lt","","",2,[[["self"],["anyargs"]],["bool"]]],[11,"le","","",2,[[["self"],["anyargs"]],["bool"]]],[11,"gt","","",2,[[["self"],["anyargs"]],["bool"]]],[11,"ge","","",2,[[["self"],["anyargs"]],["bool"]]],[11,"hash","","",2,N],[11,"from_arity_0","","",2,N],[11,"from_arity_1","","",2,N],[11,"from_arity_2","","",2,N],[11,"from_arity_3","","",2,N],[11,"from_arity_4","","",2,N],[11,"from_arity_5","","",2,N],[11,"from_arity_6","","",2,N],[11,"from_arity_7","","",2,N],[11,"from_arity_8","","",2,N],[11,"from_arity_9","","",2,N],[11,"from_arity_10","","",2,N],[11,"from_arity_11","","",2,N],[11,"from_arity_12","","",2,N],[11,"from_arity_13","","",2,N],[11,"from_arity_14","","",2,N],[11,"from_arity_15","","",2,N],[11,"clone","","",3,[[["self"]],["ruby_value_type"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"eq","","",3,[[["self"],["ruby_value_type"]],["bool"]]],[11,"ne","","",3,[[["self"],["ruby_value_type"]],["bool"]]],[11,"clone","","",4,[[["self"]],["st_retval"]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"eq","","",4,[[["self"],["st_retval"]],["bool"]]],[11,"ne","","",4,[[["self"],["st_retval"]],["bool"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,N],[11,"from","","",0,[[["t"]],["t"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,N],[11,"from","","",1,[[["t"]],["t"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,N],[11,"from","","",2,[[["t"]],["t"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,N],[11,"from","","",3,[[["t"]],["t"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,N],[11,"from","","",4,[[["t"]],["t"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]]],"paths":[[3,"VALUE"],[3,"ID"],[3,"ANYARGS"],[3,"ruby_value_type"],[3,"st_retval"]]};
initSearch(searchIndex);