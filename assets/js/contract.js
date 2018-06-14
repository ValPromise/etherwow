import abi from './abi'
export default {
  address:process.env.NODE_ENV==='development'?
    // 测试
    '0xb0a0968b6cff27d4b0abb576f473076b49b3f4b6': // 新版
    // '0x2D05359A51ca13C4ac5f4437585AFaf5bF2050F9':
    //

    // 正式版
    '0x2D05359A51ca13C4ac5f4437585AFaf5bF2050F9',
    // '0xb0a0968b6cff27d4b0abb576f473076b49b3f4b6',
    // '0xe7fca0faf2636a4bbd5143d4f6e0667943ed9694',

    abi: abi
}
