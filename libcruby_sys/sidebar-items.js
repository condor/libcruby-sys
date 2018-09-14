initSidebarItems({"fn":[["CLASS_OF","Returns the Ruby class of the object."],["RARRAY_LEN","Returns the number of elements in the Ruby `Array`."],["RSTRING_LEN","Returns the byte length of the Ruby `String`."],["RSTRING_PTR","Returns a pointer to the Ruby `String` data."],["rb_ary_entry","Returns the element at the given index or `nil` if the index is out-of-bounds for the array."],["rb_ary_new","Constructs a new, empty array."],["rb_ary_new_capa","Constructs a new, empty array with the specified capacity."],["rb_ary_push","Pushes an item on to the end of an array, returning the array itself."],["rb_block_given_p","Returns a C boolean (zero if false, non-zero if true) indicated whether yield would execute a block in the current method."],["rb_class_new_instance","Constructs a new instance of a class by calling its allocator and constructor (`alloc` and `initialize`) as `::new` normally would."],["rb_const_get","Fetches a constant from a module or class."],["rb_define_class","Defines a new class."],["rb_define_method","Defines a public method on a class."],["rb_define_module_function","Defines a method on a module, both on the module itself and as a private method for use by anything including the module."],["rb_define_singleton_method","Defines a singleton method on a class."],["rb_enc_get_index","Returns the encoding index of the provided Ruby object"],["rb_hash_aset","Inserts a key-value pair into the hash."],["rb_hash_foreach","Executes a function on each key-value pair in a hash."],["rb_hash_new","Constructs a new, empty hash."],["rb_id2str","Convert an [`ID`] to a Ruby `String`."],["rb_id2sym","Convert an [`ID`] to a `Symbol`."],["rb_inspect","Returns a human-readable Ruby string representation of an object, similarly to Ruby's `Object#inspect`."],["rb_intern","Converts an ASCII-encoded, nul-terminated C string to an [`ID`]."],["rb_intern2","Converts an ASCII-encoded C string of the given length to an [`ID`]."],["rb_intern_str","Convert a string to an [`ID`]."],["rb_obj_class","Looks up the nearest ancestor class of the object, skipping singleton classes or module inclusions."],["rb_obj_classname","Gets the object's class' name"],["rb_sym2id","Convert a `Symbol` to an [`ID`]."],["rb_undef_method","Undefines the named method on a class."],["rb_utf8_encindex","Returns the encoding index for UTF-8"],["rb_utf8_str_new","Constructs a new Ruby string from a UTF-8 encoded C string of a given length."]],"static":[["Qfalse",""],["Qnil",""],["Qtrue",""],["ST_CHECK",""],["ST_CONTINUE",""],["ST_DELETE",""],["ST_STOP",""],["rb_cArray","The `Array` class"],["rb_cBasicObject","The `BasicObject` class"],["rb_cBinding","The `Binding` class"],["rb_cClass","The `Class` class"],["rb_cComplex","The `Complex` class"],["rb_cDir","The `Dir` class"],["rb_cEncoding","The `Encoding` class"],["rb_cEnumerator","The `Enumerator` class"],["rb_cFalseClass","The `FalseClass` class"],["rb_cFile","The `File` class"],["rb_cFloat","The `Float` class"],["rb_cHash","The `Hash` class"],["rb_cIO","The `IO` class"],["rb_cInteger","The `Integer` class"],["rb_cMatch","The `MatchData` class"],["rb_cMethod","The `Method` class"],["rb_cModule","The `Module` class"],["rb_cNilClass","The `NilClass` class"],["rb_cNumeric","The `Numeric` class"],["rb_cObject","The `Object` class"],["rb_cProc","The `Proc` class"],["rb_cRandom","The `Random` class"],["rb_cRange","The `Range` class"],["rb_cRational","The `Rational` class"],["rb_cRegexp","The `Regexp` class"],["rb_cStat","The `File::Stat` class"],["rb_cString","The `String` class"],["rb_cStruct","The `Struct` class"],["rb_cSymbol","The `Symbol` class"],["rb_cThread","The `Thread` class"],["rb_cTime","The `Time` class"],["rb_cTrueClass","The `TrueClass` class"],["rb_cUnboundMethod","The `UnboundMethod` class"],["rb_eArgError","The `ArgumentError` exception class"],["rb_eEOFError","The `EOFError` exception class"],["rb_eEncCompatError","The `Encoding::CompatibilityError` exception class"],["rb_eEncodingError","The `EncodingError` exception class"],["rb_eException","The `Exception` class"],["rb_eFloatDomainError","The `FloatDomainError` exception class"],["rb_eIOError","The `IOError` exception class"],["rb_eIndexError","The `IndexError` exception class"],["rb_eInterrupt","The `Interrupt` exception class"],["rb_eKeyError","The `KeyError` exception class"],["rb_eLoadError","The `LoadError` exception class"],["rb_eLocalJumpError","The `LocalJumpError` exception class"],["rb_eMathDomainError","The `Math::DomainError` exception class"],["rb_eNameError","The `NameError` exception class"],["rb_eNoMemError","The `NoMemoryError` exception class"],["rb_eNoMethodError","The `NoMethodError` exception class"],["rb_eNotImpError","The `NotImplementedError` exception class"],["rb_eRangeError","The `RangeError` exception class"],["rb_eRegexpError","The `RegexpError` exception class"],["rb_eRuntimeError","The `RuntimeError` exception class"],["rb_eScriptError","The `ScriptError` exception class"],["rb_eSecurityError","The `SecurityError` exception class"],["rb_eSignal","The `Signal` exception class"],["rb_eStandardError","The `StandardError` exception class"],["rb_eStopIteration","The `StopIteration` exception class"],["rb_eSyntaxError","The `SyntaxError` exception class"],["rb_eSysStackError","The `SystemStackError` exception class"],["rb_eSystemCallError","The `SystemCallError` exception class"],["rb_eSystemExit","The `SystemExit` exception class"],["rb_eThreadError","The `ThreadError` exception class"],["rb_eTypeError","The `TypeError` exception class"],["rb_eZeroDivError","The `ZeroDivisionError` exception class"],["rb_mComparable","The `Comparable` module"],["rb_mEnumerable","The `Enumerable` module"],["rb_mErrno","The `Errno` module"],["rb_mFileTest","The `FileTest` module"],["rb_mGC","The `GC` module"],["rb_mKernel","The `Kernel` module"],["rb_mMath","The `Math` module"],["rb_mProcess","The `Process` module"],["rb_mWaitReadable","The `IO::WaitReadable` module"],["rb_mWaitWritable","The `IO::WaitWritable` module"]],"struct":[["ANYARGS",""],["ID",""],["VALUE",""],["st_retval",""]]});