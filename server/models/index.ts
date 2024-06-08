export { SliderModel } from './slider';
export { UserModel } from './user';
export { AuthorModel } from './author';
export { CategoryModel } from './category';
export { ChapterModel } from './chapter';
export { BookModel } from './book';
export { NewModel } from './news';
export { SuportModel } from './suport'; // Sửa lỗi chính tả nếu cần
export { TopModel } from './top';
export { TopicModel } from './topic';
export { RequestModel } from './request';
export { DashboardModel } from './dashboard';
export { ScriptModel } from './scripts';


import {
    SliderModel, UserModel, AuthorModel, CategoryModel, ChapterModel, BookModel, NewModel,
    SuportModel, TopModel, TopicModel, RequestModel, DashboardModel, ScriptModel
} from './';



export async function initializeModels() {
    try {
        await Promise.all([
            SliderModel.init(),
            UserModel.init(),
            AuthorModel.init(),
            CategoryModel.init(),
            ChapterModel.init(),
            BookModel.init(),
            NewModel.init(),
            SuportModel.init(),
            TopModel.init(),
            TopicModel.init(),
            RequestModel.init(),
            DashboardModel.init(),
            ScriptModel.init(),
        ]);
        console.log("All models initialized successfully");
    } catch (error) {
        console.error("Error initializing models:", error);
        throw error;
    }
}