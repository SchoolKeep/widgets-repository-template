export async function init(sdk) {
  console.log('[greeting] init called', sdk);
  await sdk.whenReady();
  console.log('[greeting] sdk ready');
  const render = (props) => {
    console.log('[greeting] render called with props', props);
    sdk.$('.card').style.background = props.color;
    sdk.$('#title').textContent = props.title;
    sdk.$('#message').textContent = props.message;
    console.log('[greeting] render complete', {
      card: sdk.$('.card'),
      title: sdk.$('#title'),
      message: sdk.$('#message'),
    });
  };
  const props = sdk.getProps();
  console.log('[greeting] initial props', props);
  render(props);
  sdk.on('propsChanged', render);
  sdk.on('destroy', () => {
    console.log('[greeting] destroy called');
    sdk.$('.card').innerHTML = '';
  });
}
