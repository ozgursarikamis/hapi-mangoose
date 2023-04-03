import { IPaginationParameters } from "../../Models/IPaginationParameters";
import { CourseService } from "../../Services/Course.Service";
import { ResponseToolkit } from "@hapi/hapi";

export class CoursesHandler {
    private courseService: CourseService;
    constructor() {
        this.courseService = new CourseService();
    }

    static async GetAllCourses(
        request: Request,
        responseToolkit: ResponseToolkit,
        paginationParameters: IPaginationParameters) {
        if (!paginationParameters) {
            paginationParameters = {
                skip: 0,
                take: 10
            }
        }

        return await CourseService.GetAllCourses(paginationParameters);
    }
}