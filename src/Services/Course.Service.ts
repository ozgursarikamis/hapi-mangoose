import { IPaginationParameters } from "../Models/IPaginationParameters";
import { DatabaseService } from "./Database.Service";
import { CourseModel } from "../Models/Schemas/Courses";

export class CourseService {
    static async GetAllCourses(paginationParameters: IPaginationParameters) {
        return DatabaseService.Connect().then(() => {
            const take = paginationParameters.take;
            const skip = paginationParameters.skip;
            return CourseModel.find()
                .select('-_id')
                .skip(skip).limit(take);
        }).catch((err) => {
            console.error(err); //TODO: Handle error
        });
        // return Promise.resolve(undefined);
    }
}