describe('optIn', function(){
	var scope,
		element, 
		compiled,
		html;

	beforeEach(module('formApp'));
	beforeEach(module('form.html'));
	beforeEach(inject(function($rootScope, $compile){
		html="";
		html+="<opt-in></opt-in>";

		scope = $rootScope.$new();
		compiled = $compile(html);
		element = compiled(scope);
		scope.$digest();

	}));
	it('should render the element correctly', function(){
		expect(element.find('div').length).toBe(1);
		expect(element.find('form').length).toBe(1);
		expect(element.find('input').length).toBe(3);
		expect(element.find('button').length).toBe(1);

	});
});