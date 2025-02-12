import { Document, ObjectId, WithId } from "mongodb";

import { LeaderboardEntry } from "./profile-models";

// Schema for each MongoDB
export interface LeaderboardSchema extends LeaderboardEntry, WithId<Document>{
	_id: ObjectId,
}
