require 'minitest/autorun'

require 'libcruby-sys'

$LOAD_PATH.unshift File.expand_path('../support/dummy/lib', __FILE__)
require 'dummy'


class DummyTests < Minitest::Test

#   module TYPES
#     UNTESTED = {}

#     CASES = {
#       T_NONE:     UNTESTED,
#       T_NIL:      nil,
#       T_OBJECT:   Object.new,
#       T_CLASS:    Class.new,
#       T_ICLASS:   UNTESTED,
#       T_MODULE:   Module.new,
#       T_FLOAT:    1.5,
#       T_STRING:   "hello",
#       T_REGEXP:   /hello/,
#       T_ARRAY:    [],
#       T_HASH:     {},
#       T_STRUCT:   Struct.new(:hello).new,
#       T_BIGNUM:   2 ** 65,
#       T_FILE:     File.open(__FILE__),
#       T_FIXNUM:   2,
#       T_TRUE:     true,
#       T_FALSE:    false,
#       T_DATA:     UNTESTED,
#       T_MATCH:    "hello".match(/hello/),
#       T_SYMBOL:   :hello,
#       T_RATIONAL: Rational(1, 2),
#       T_COMPLEX:  Complex(1, 2),
#       T_UNDEF:    UNTESTED,
#       T_NODE:     UNTESTED,
#       T_ZOMBIE:   UNTESTED,
#       T_MASK:     UNTESTED
#     }
#   end

#   it 'has a version number' do
#     expect(HelixRuntime::VERSION).not_to be nil
#   end

  # def test_exports_Qtrue
  #   assert_equal(true, Dummy::Qtrue)
  # end

  # def test_exports_Qfalse
  #   assert_equal(false, Dummy::Qfalse)
  # end

  # def test_exports_Qnil
  #   assert_nil(Dummy::Qnil)
  # end

  def test_RSTRING_LEN_macro
    assert_equal(5, Dummy.RSTRING_LEN('hello'))
  end

  def test_RSTRING_PTR_macro
    refute_equal(Dummy::RSTRING_PTR('hello'), Dummy.RSTRING_PTR('hello'))
    assert_equal(Dummy.RSTRING_PTR('hello'.freeze), Dummy::RSTRING_PTR('hello'.freeze))
  end

  def test_RARRAY_LEN_macro
    assert_equal(5, Dummy.RARRAY_LEN([1,2,3,4,5]))
  end

#   it 'exports the RARRAY_PTR macro' do
#     arr = [1,2,3,4,5]
#     expect(Dummy.RARRAY_PTR([1,2,3,4,5])).to_not eq(Dummy::RARRAY_PTR([1,2,3,4,5]))
#     expect(Dummy.RARRAY_PTR(arr)).to eq(Dummy::RARRAY_PTR(arr))
#   end

#   it 'exports the RARRAY_CONST_PTR macro' do
#     arr = [1,2,3,4,5]
#     expect(Dummy.RARRAY_CONST_PTR([1,2,3,4,5])).to_not eq(Dummy::RARRAY_CONST_PTR([1,2,3,4,5]))
#     expect(Dummy.RARRAY_CONST_PTR(arr)).to eq(Dummy::RARRAY_CONST_PTR(arr))
#   end

#   it 'exports the RHASH_SIZE macro' do
#     expect(Dummy.RHASH_SIZE({a: 1, b: 2, c: 3, d: 4, e: 5})).to equal(5)
#   end

#   it 'exports the RB_NIL_P macro' do
#     expect(Dummy.RB_NIL_P(nil)).to eq(true)
#     expect(Dummy.RB_NIL_P(:foo)).to eq(false)
#   end

#   it 'exports the RTEST macro' do
#     expect(Dummy.RTEST(true)).to eq(true)
#     expect(Dummy.RTEST(:foo)).to eq(true)
#     expect(Dummy.RTEST(false)).to eq(false)
#     expect(Dummy.RTEST(nil)).to eq(false)
#   end

#   it 'exports the OBJ_FROZEN macro' do
#     expect(Dummy.OBJ_FROZEN(Object.new)).to eq(false)
#     expect(Dummy.OBJ_FROZEN(Object.new.freeze)).to eq(true)
#   end

#   describe 'coercions' do
#     it "(INT2FIX)" do
#       expect(Dummy.INT2FIX(10)).to eq(10)
#     end

#     it "(FIX2INT)" do
#       expect(Dummy.FIX2INT(10)).to eq(10)
#     end

#     it "(NUM2U64)" do
#       expect(Dummy.NUM2U64(10)).to eq(10)
#     end

#     it "(U642NUM)" do
#       expect(Dummy.U642NUM(10)).to eq(10)
#     end

#     it "(NUM2I64)" do
#       expect(Dummy.NUM2I64(10)).to eq(10)
#       expect(Dummy.NUM2I64(-10)).to eq(-10)
#     end

#     it "(I642NUM)" do
#       expect(Dummy.I642NUM(10)).to eq(10)
#       expect(Dummy.I642NUM(-10)).to eq(-10)
#     end

#     it "(NUM2U32)" do
#       expect(Dummy.NUM2U32(10)).to eq(10)
#     end

#     it "(U322NUM)" do
#       expect(Dummy.U322NUM(10)).to eq(10)
#     end

#     it "(NUM2I32)" do
#       expect(Dummy.NUM2I32(10)).to eq(10)
#       expect(Dummy.NUM2I32(-10)).to eq(-10)
#     end

#     it "(I322NUM)" do
#       expect(Dummy.I322NUM(10)).to eq(10)
#       expect(Dummy.I322NUM(-10)).to eq(-10)
#     end

#     it "(NUM2F64)" do
#       expect(Dummy.NUM2F64(12.34)).to eq(12.34)
#       expect(Dummy.NUM2F64(-12.34)).to eq(-12.34)
#       expect(Dummy.NUM2F64(12)).to eq(12)
#       expect(Dummy.NUM2F64(-12)).to eq(-12)
#     end

#     it "(F642NUM)" do
#       expect(Dummy.F642NUM(12.34)).to eq(12.34)
#       expect(Dummy.F642NUM(-12.34)).to eq(-12.34)
#     end
#   end

#   describe "exports T_* constants:" do
#     TYPES::CASES.each do |type_name, obj|
#       next if obj == TYPES::UNTESTED
#       type = Dummy.const_get(type_name)

#       describe "#{obj.class} is #{type_name}" do
#         it "(RB_TYPE_P)" do
#           expect(Dummy.RB_TYPE_P(obj, type)).to be(true)
#           expect(Dummy.RB_TYPE_P(obj, Dummy::T_NONE)).to be(false)
#         end

#         it "(TYPE)" do
#           expect(Dummy.TYPE(obj)).to be(type)
#         end
#       end
#     end
#   end

#   # it 'exports the RB_TYPE_P macro and T_*' do
#   #   expect(Dummy.RB_TYPE_P("hello", Dummy::T_STRING)).to be(true)
#   #   expect(Dummy.RB_TYPE_P({}, Dummy::T_HASH)).to be(true)
#   #   expect(Dummy.RB_TYPE_P([], Dummy::T_OBJECT)).to be(false)
#   # end

#   # it 'exports the TYPE macro' do
#   #   expect(Dummy.TYPE("hello")).to eq(Dummy::T_STRING)
#   #   expect(Dummy.TYPE({})).to eq(Dummy::T_HASH)
#   #   expect(Dummy.TYPE([])).to_not eq(Dummy::T_OBJECT)
#   # end

#   describe "helix_rb_utf8_str_new" do
#     it "allocates a new string" do
#       str1 = "hello world"
#       str2 = Dummy.STR2STR(str1, 5)

#       expect(str2).to eq("hello")

#       str1[0...5] = "goodbye"

#       expect(str1).to eq("goodbye world")
#       expect(str2).to eq("hello")

#       str2 << " world!"

#       expect(str1).to eq("goodbye world")
#       expect(str2).to eq("hello world!")
#     end
#   end

#   describe "HELIX_rb_str_valid_encoding_p" do
#     it "matches #valid_encoding?" do
#       str = "hello world"
#       expect(Dummy.valid_encoding_p(str)).to eq(str.valid_encoding?)

#       str = "hello world".encode("BIG5")
#       expect(Dummy.valid_encoding_p(str)).to eq(str.valid_encoding?)

#       str = "hello world".force_encoding("BIG5")
#       expect(Dummy.valid_encoding_p(str)).to eq(str.valid_encoding?)

#       str = "ｈｅｌｌｏ"
#       expect(Dummy.valid_encoding_p(str)).to eq(str.valid_encoding?)

#       str = "ｈｅｌｌｏ".encode("BIG5")
#       expect(Dummy.valid_encoding_p(str)).to eq(str.valid_encoding?)

#       str = "ｈｅｌｌｏ".force_encoding("BIG5")
#       expect(Dummy.valid_encoding_p(str)).to eq(str.valid_encoding?)

#       str = "\330"
#       expect(Dummy.valid_encoding_p(str)).to eq(str.valid_encoding?)
#     end
#   end

#   describe "HELIX_rb_str_ascii_only_p" do
#     it "matches #ascii_only?" do
#       str = "hello world"
#       expect(Dummy.ascii_only_p(str)).to eq(str.ascii_only?)

#       str = "hello world".encode("BIG5")
#       expect(Dummy.ascii_only_p(str)).to eq(str.ascii_only?)

#       str = "hello world".force_encoding("BIG5")
#       expect(Dummy.ascii_only_p(str)).to eq(str.ascii_only?)

#       str = "ｈｅｌｌｏ"
#       expect(Dummy.ascii_only_p(str)).to eq(str.ascii_only?)

#       str = "ｈｅｌｌｏ".encode("BIG5")
#       expect(Dummy.ascii_only_p(str)).to eq(str.ascii_only?)

#       str = "ｈｅｌｌｏ".force_encoding("BIG5")
#       expect(Dummy.ascii_only_p(str)).to eq(str.ascii_only?)

#       str = "\330"
#       expect(Dummy.ascii_only_p(str)).to eq(str.ascii_only?)
#     end
#   end

#   describe "Data_{Wrap,Get,Set}_Struct" do
#     it "can allocate then change the data" do
#       wrapper = Dummy::Wrapper.new

#       expect(Dummy.get_data(wrapper)).to eq(0)

#       ptr = Dummy.get_data_ptr(wrapper)

#       expect(Dummy.set_data(wrapper, 1)).to eq(1)

#       expect(Dummy.get_data(wrapper)).to eq(1)
#       expect(Dummy.get_data_ptr(wrapper)).to eq(ptr)
#     end

#     it "can allocate then replace the data" do
#       wrapper = Dummy::Wrapper.new

#       expect(Dummy.get_data(wrapper)).to eq(0)

#       ptr = Dummy.get_data_ptr(wrapper)

#       expect(Dummy.replace_data(wrapper, 1)).to eq(1)

#       expect(Dummy.get_data(wrapper)).to eq(1)
#       expect(Dummy.get_data_ptr(wrapper)).not_to eq(ptr)
#     end
#   end
end
