export async function init(sdk) {
  await sdk.whenReady();
  const render = (props) => {
    sdk.$('.card').style.background = props.color;
    sdk.$('#title').textContent = props.title;
    sdk.$('#message').textContent = props.message;
  };
  render(sdk.getProps());
  sdk.on('propsChanged', render);
  sdk.on('destroy', () => {
    sdk.$('.card').innerHTML = '';
  });
}
