export async function init(sdk) {
  console.log('[greeting] init called', sdk);
  console.log('[greeting] sdk keys', Object.keys(sdk));
  console.log('[greeting] sdk prototype keys', Object.getOwnPropertyNames(Object.getPrototypeOf(sdk)));
  await sdk.whenReady();
  console.log('[greeting] sdk ready');
}
