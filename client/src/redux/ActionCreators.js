import * as ActionTypes from './ActionTypes';
import { config } from '../config'

import { push } from 'connected-react-router'

import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import axios from 'axios'

import Message from '../components/Shared/Message/MessageComponent'
import Input from '../components/Shared/Input/InputComponent'

// List of predefined variables
const __CONFIG__ = {
    initialMessage: <>Please type '<span className="command-tip">start</span>' to begin, or type '<span className="command-tip">help</span>' for a list of commands.</>
}

// Shows contact component
export const showContact = () => ({
    type: ActionTypes.SHOW_CONTACT
})

// Hides contact component
export const hideContact = () => ({
    type: ActionTypes.HIDE_CONTACT
})

// Shows project component
export const showProjects = () => dispatch => {
    dispatch(loadProjects()) // Loads project from MongoDB into store

    dispatch(push('/projects'))
}

// Hides project component
export const hideProjects = () => dispatch => {
    dispatch(push('/'))
}

// Runs when page is open
export const initialize = () => dispatch => {
    dispatch(hideProjects()) // Hides project component
    dispatch(hideContact()) // Hides contact component
    dispatch(emptyConsole()) // Empties the console
    dispatch(insertMessage(__CONFIG__.initialMessage)) // Inserts the initial message
    dispatch(insertInput()) // Inserts a new component
}

// Sets the index for the array of commands depending on direction
export const tickHistory = direction => dispatch => {
    switch (direction) {
        case 'forwards':
            return dispatch({ type: ActionTypes.TICK_HISTORY_INDEX_UP })
        case 'backwards':
            return dispatch({ type: ActionTypes.TICK_HISTORY_INDEX_DOWN })
        default:
            return false // If not either, will just return false
    }
}

// Gets the last commands based on the index and button clicked
export const getHistoryItem = direction => (dispatch, getState) => {
    const history = getState().console.history, // Gets history from store
          index = getState().console.historyIndex // Gets the current index

    switch(direction) {
        case 'forwards':
            if (index < history.length) {
                dispatch(tickHistory(direction)) // Sets index down in the direction indicated
                return history[index]
            }
            return history[index - 1]
        case 'backwards':
            if (index > 0) {
                dispatch(tickHistory(direction)) // Sets index down in the direction indicated
                return history[index - 1]
            }
            return history[index - 1]

        default:
            break
    }
}

// Executes the command typed into the console
export const executeCommand = command => dispatch => {
    dispatch({
        type: ActionTypes.EXECUTE_COMMAND,
        payload: command
    })

    switch (command) {
        case 'start':
            setTimeout(() => {
                dispatch(insertMessage([
                    <>
                        Hello there, and welcome to my portfolio website :)<br />
                        My name is Jordan Barbosa, and I am a 22 year old web dev.<br />
                        Currently, I am specializing in React/Redux, NodeJS and MongoDB, but I like to constantly learn other new technologies. <br /><br />
                        If you would like to view the code for this website, please type in the command '<span className="command-tip command-link">code</span>'.<br />
                        If you would like to view my projects, please type in the command '<span className="command-tip command-link">projects</span>'.<br />
                        If you would like to send me a message, please type in the command '<span className="command-tip command-link">contact</span>'.<br />
                        If you would like to view my resume, please type in the command '<span className="command-tip command-link">resume</span>'.
                    </>
                ]))
                dispatch(insertInput()) // After every typed command, there needs to be this. This will insert a new input into the command box
            }, 100)
            return true; // Returns true so console doesn't think an error occured
        case 'help':
            setTimeout(() => {
                dispatch(insertItem([
                    <table>
                        <tbody>
                            <tr>
                                <td>START</td>
                                <td>STARTS OFF INTRODUCTION</td>
                            </tr>
                            <tr>
                                <td>CLEAR</td>
                                <td>CLEARS CONSOLE</td>
                            </tr>
                            <tr>
                                <td>SOCIAL</td>
                                <td>SHOWS MY SOCIAL NETWORK LINKS (GitHub, Instagram, LinkedIn, Email)</td>
                            </tr>
                            <tr>
                                <td>CONTACT</td>
                                <td>CONTACT ME</td>
                            </tr>
                            <tr>
                                <td>CODE</td>
                                <td>SHOWS A LINK TO GITHUB PAGE FOR THIS WEBSITE</td>
                            </tr>
                            <tr>
                                <td>RESUME</td>
                                <td>SHOWS A LINK TO MY RESUME</td>
                            </tr>
                            <tr>
                                <td>HELP</td>
                                <td>SHOWS ALL AVAILABLE COMMANDS (this command)</td>
                            </tr>
                        </tbody>
                    </table>
                ]))
                dispatch(insertInput()) // After every typed command, there needs to be this. This will insert a new input into the command box
            }, 100)
            return true; // Returns true so console doesn't think an error occured
        case 'clear':
            setTimeout(() => {
                dispatch(emptyConsole()) // Empties console as the name emplies
                dispatch(insertMessage(__CONFIG__.initialMessage)) // Resets the initial message
                dispatch(insertInput()) // After every typed command, there needs to be this. This will insert a new input into the command box
            }, 100)
            return true; // Returns true so console doesn't think an error occured
        case 'social':
            setTimeout(() => {
                dispatch(insertItem([
                    <ButtonGroup className="terminal-btn-group">
                        <a className="btn btn-secondary" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jordan-barbosa"><i className="fab fa-linkedin"></i>&nbsp; LinkedIn</a>
                        <a className="btn btn-secondary" target="_blank" rel="noopener noreferrer" href="https://github.com/jordanjordanb1"><i className="fab fa-github"></i>&nbsp; Github</a>
                        <a className="btn btn-secondary" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jordanjordanb/"><i className="fab fa-instagram"></i>&nbsp; Instagram</a>
                        <a className="btn btn-secondary" target="_blank" rel="noopener noreferrer" href="mailto:jordansbarbosa01@gmail.com"><i className="fas fa-envelope"></i>&nbsp; Email</a>
                    </ButtonGroup>
                ]))
                dispatch(insertInput()) // After every typed command, there needs to be this. This will insert a new input into the command box
            }, 100)
            return true // Returns true so console doesn't think an error occured
        case 'contact':
            setTimeout(() => {
                dispatch(insertMessage('Showing contact form...'))
                dispatch(showContact())
            }, 100)
            return true; // Returns true so console doesn't think an error occured
        case 'code':
            setTimeout(() => {
                dispatch(insertItem([
                    <ButtonGroup className="terminal-btn-group">
                        <a href="https://github.com/jordanjordanb1/jordanjordanb1.github.io" target="_blank" rel="noopener noreferrer" className="btn btn-secondary"><i className="fab fa-github"></i>&nbsp; GitHub</a>
                    </ButtonGroup>
                ]))
                dispatch(insertInput()) // After every typed command, there needs to be this. This will insert a new input into the command box
            }, 100)
            return true;
        case 'projects':
            dispatch(insertMessage('Showing projects page...'))
            setTimeout(() => {
                dispatch(showProjects()) 
            }, 100)
            return true; // Returns true so console doesn't think an error occured
        case 'resume':
            const resumeLink = `${config.url}/static/media/resume.pdf`

            setTimeout(() => {
                dispatch(insertItem([
                    <ButtonGroup className="terminal-btn-group">
                        <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Resume</a>
                    </ButtonGroup>
                ]))
                dispatch(insertInput()) // After every typed command, there needs to be this. This will insert a new input into the command box
            }, 100)
            return true // Returns true so console doesn't think an error occured
        case 'login':
            dispatch(insertMessage('Showing login page...'))
            setTimeout(() => {
                dispatch(toggleLogin())
            }, 100)
            return true; // Returns true so console doesn't think an error occured
        default:
            return false; // Returns false so console knows error occured
    }
}

// Inserts a custom item for custom HTML items
export const insertItem = item => ({
    type: ActionTypes.INSERT_ITEM,
    payload: item
})

// Inserts a message into a <p> tag
export const insertMessage = message => ({
    type: ActionTypes.INSERT_MESSAGE,
    payload: <Message message={message} />
})

// Inserts a new input, with or without a value
export const insertInput = value => ({
    type: ActionTypes.INSERT_INPUT,
    payload: <Input value={value} />
})

// Empties the console.
export const emptyConsole = () => ({
    type: ActionTypes.EMPTY_CONSOLE
})

// Sets the reference for react for a new input. So that the focus on the console click can work.
export const setRef = ref => ({
    type: ActionTypes.SET_REF,
    payload: ref
})

// Sets the value of the newest input
export const setInputValue = value => ({
    type: ActionTypes.SET_INPUT_VALUE,
    payload: value
})

// Sends an AJAX request to server to send an email from the contact form
export const sendEmail = values => dispatch => {
    if (!values) { // Checks to make sure a value was set
        return false // Returns false if no value was set
    } else {
        axios.post(`${config.url}/mail`, { // Sends a POST to the server with the values from contact form
            formData: values
        }).then(res => {
            if (res.data.success) {
                return true
            } else {
                return false
            }
        })
        .catch(error => {
            console.error(error) // If there's an error, just console log it for now
        })
    }
}

// Loads the received projects from server into redux store
export const setProjects = projects => ({
    type: ActionTypes.SET_PROJECTS,
    payload: projects
})


// Gets the projects array from the server
export const loadProjects = () => (dispatch, getState) => {
    const projects = getState().projects.projects // Loads the projects array from the store

    if (projects.length === 0) { // Checks to see if the array is empty
        axios.get(`${config.url}/projects`) // If it's empty, then load from the server
        .then(projects => {
            if (projects) { // If projects doesn't come back empty, put the projects into the store
                dispatch(setProjects(projects.data))
                return true
            }
            return false
        })
    }

    return true // Will return true because projects in the store isn't empty, so there's no need to request it from the server.
}

// Shows or hide login page
export const toggleLogin = () => ({
    type: ActionTypes.TOGGLE_LOGIN
})

// Puts token jwt token in redux store
export const setToken = token => ({
    type: ActionTypes.SET_TOKEN,
    payload: token
})

// Sends type user to server for check
export const loginUser = values => dispatch => {
    if (values) {
        axios.post(`${config.url}/users/login`, values)
            .then(res => {
                const { token } = res.data

                if (token) {
                    dispatch(setToken(token))
                }

                return true
            }).catch(e => console.error(e))
    }

    return false
}
