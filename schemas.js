import { ObjectId } from "bson";

class Request {
  /**
   *
   * @param {string} name The name of the task
   * @param {string status The status of the request. Default value is "Open"
   * @param {ObjectId} id The ObjectId to create this request with
   */
  constructor({
    name,
    partition,
    status = Request.STATUS_OPEN,
    id = new ObjectId(),
  }) {
    this._partition = partition;
    this._id = id;
    this.name = name;
    this.status = status;
  }

  static STATUS_OPEN = "Open";
  static STATUS_IN_PROGRESS = "InProgress";
  static STATUS_COMPLETE = "Complete";
  static schema = {
    name: "Request",
    properties: {
      _id: "objectId",
      name: "string",
      status: "string",
    },
    primaryKey: "_id",
  };
}

export { Request };