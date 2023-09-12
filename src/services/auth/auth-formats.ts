// PUT Request format for adding and removing roles
export interface ModifyRoleRequest {
	id: string,
    role: string
}
export interface EncodeDataRequest {
	user: string,
    data: JSON
}

export interface DecodeDataRequest {
	token: string,
	context: JSON
}
