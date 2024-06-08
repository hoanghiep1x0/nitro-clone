import mongoose from 'mongoose';
import { initializeModels } from '../models';

export default defineNitroPlugin(async (nitroApp) => {

    try {
      
        // useRuntimeConfig().mongoose.uri;
        await mongoose.connect("mongodb://root:131312htquynh@149.28.148.206:27117/siteTruyen")

        console.log("connect mongoodb");
      
        // Đăng ký tất cả các model sau khi kết nối MongoDB thành công
        await initializeModels();
    } catch (error) {
        console.log(error);
        throw createError({status: 500, statusMessage:"Có lỗi khi kết nối cơ sở dữ liệu.", message: "Có lỗi khi kết nối cơ sở dữ liệu."});
    }
})