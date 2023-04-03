import { IListing } from "../Models/Response/IListing";
import { IPaginationParameters } from "../Models/IPaginationParameters";
import { DatabaseService } from "./Database.Service";
import { ListingModel } from "../Models/Schemas/Listing";

export class ListingService {
    private listingRepository: ListingService;

    constructor() {
        this.listingRepository = new ListingService();
    }

    public async getListing(id: number): Promise<IListing> {
        return await this.listingRepository.getListing(id);
    }

    public static async GetAllListings(params: IPaginationParameters): Promise<IListing[]> {
        return DatabaseService.Connect().then(() => {
            const take = params.take;
            const skip = params.skip;
            return ListingModel.find()
                // .select('-_id')
                .skip(skip).limit(take);
        });
    }
}