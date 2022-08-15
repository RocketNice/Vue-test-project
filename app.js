const App = {
    data() {
        return {
            title: "Список заметок",
            placeholderString: 'Введите название заметки',
            inputValue: '',
            notes: ['1', '2', '3']
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        deleteNote(idx) {
            this.notes.splice(idx, 1)
        }
    }
}
Vue.createApp(App).mount('#app')