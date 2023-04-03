import { ListingService } from "../../Services/Listing.Service";
import { Request } from "hapi";
import { ResponseToolkit } from "@hapi/hapi";
import { IPaginationParameters } from "../../Models/IPaginationParameters";

export class ListingsHandler {
    private listingService: ListingService;

    constructor() {
        this.listingService = new ListingService();
    }

    static async GetAllListings(request: Request, responseToolkit: ResponseToolkit, paginationParameters: IPaginationParameters) {
        if (!paginationParameters) {
            paginationParameters = {
                skip: 0,
                take: 10
            }
        }

        const listings = await ListingService.GetAllListings(paginationParameters);
        console.log('Listings: ', listings);
        return listings;
    }

    static async GetListingById() {
        throw new Error("Not implemented");
    }
}