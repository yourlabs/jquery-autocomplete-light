QUnit.test('$.yourlabsRegistry is defined', function(assert) {
  assert.notOk($.fn.yourlabsRegistry === undefined);
});

QUnit.test('$.yourlabsRegistry stores and retrieves', function(assert) {
  var $input = $('input[name=no-id]');

  $input.yourlabsRegistry('foo', 'bar');
  assert.equal($input.yourlabsRegistry('foo'), 'bar');

  var fixture = {'foo': 'bar'};
  $input.yourlabsRegistry('test', fixture);
  assert.equal($input.yourlabsRegistry('test'), fixture);
});
