import { Form } from './components/Form'
import { Item } from './components/Item'
import { Page } from './components/Page'
import { ToDoModel } from './components/ToDoModel'
import { todos } from './utils/constants'
import { ItemPresenter } from './components/ToDoPresenter'
import './styles/styles.css'

const contentElement = document.querySelector('.content') as HTMLElement

const itemContainer = new Page(contentElement)

const todoArray = new ToDoModel()
todoArray.items = todos

const itemPresenter = new ItemPresenter(todoArray, Form, itemContainer, Item)

itemPresenter.init()
itemPresenter.renderView()
