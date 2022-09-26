import mongo from './mongo';

export default async function init(): Promise<void> {
  await mongo.validate_and_make_connection();
}