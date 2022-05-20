# ELEMENTATION

-   `Element based action handling function`
-   `Simple handling pre, action, post for events`
-   `Use case` : just wanted to create something and this function turned out. Do not know when it is best to be used but i think we can use it anyway for many scenarios like when we click an element we can call api and before api call and after api call we can handle it in proper way, might be managed way to handle api. If any other scenarios best fit let me know.

```js
ELM.act(
	// element to target
	'.elementation',

	// event to trigger
	'click', // event function name just doesnot have 'on' - onclick -> click, onmouseover -> mouseover | hover

	// pre event action function
	function (props) {
		// console.log(props.e) // can access event
		// console.log(props.el) // can access element
		console.log('i am triggered before event action function is triggered')
		return 'Pre response'
	},

	// event action function
	function (e, el, props) {
		// console.log(props.preResponse) // can access pre response returned value
		console.log('clicked')
		return 'hi'
	},

	// post event action function
	function (props) {
		console.log(props.actionResponse)
		console.log('i am triggered after event action function is triggered')
		return 'post action response'
	}
)

// ELM.actResponse -> has returned value from post function
```
