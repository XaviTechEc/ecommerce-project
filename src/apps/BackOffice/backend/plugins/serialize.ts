import { BSON } from 'bson';

export class SerializePlugin {
  static serialize(value: BSON.Document, options?: BSON.SerializeOptions) {
    return BSON.serialize(value, options);
  }

  static deserialize(buffer: Uint8Array, options?: BSON.DeserializeOptions) {
    return BSON.deserialize(buffer, options);
  }
}
