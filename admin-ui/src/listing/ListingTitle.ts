import { Listing as TListing } from "../api/listing/Listing";

export const LISTING_TITLE_FIELD = "locationData";

export const ListingTitle = (record: TListing): string => {
  return record.locationData || String(record.id);
};
