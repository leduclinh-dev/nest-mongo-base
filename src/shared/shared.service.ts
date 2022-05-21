import { Document, Model } from 'mongoose';

export class SharedService<T extends Document> {
  private readonly _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  async getAll(): Promise<T[]> {
    return this._model.find().exec();
  }

  async getOne(value: any, queryBy = '_id'): Promise<T> {
    const query = {};
    query[queryBy] = value;
    return this._model.findOne(query).exec();
  }

  async getById(id: string): Promise<T> {
    return this._model.findById(id).exec();
  }

  async getByIds(ids: string[]): Promise<T[]> {
    return this._model.find({ _id: { $in: ids } }).exec();
  }

  async createFromRequestBody(body: Partial<T>): Promise<T> {
    return this._model.create({ ...body });
  }

  async create(resource: T): Promise<T> {
    return this._model.create(resource);
  }

  async updateFromRequestBody(body: Partial<T>): Promise<T> {
    const existed: T = await this._model
      .findById(body._id ? body._id : body.id)
      .exec();

    const updated = { _id: existed._id, ...body };

    return this._model
      .findByIdAndUpdate(updated._id, updated, { new: true })
      .exec();
  }

  async update(updatedResource: any): Promise<any> {
    return this._model
      .findByIdAndUpdate(updatedResource._id, updatedResource, { new: true })
      .exec();
  }

  async delete(id: string): Promise<T> {
    return this._model.findByIdAndDelete(id).exec();
  }
}
