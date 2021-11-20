import {createContext} from 'react'

const Component= createContext()


const TestComponent= ({children}) => {
    return(
       <TestComponent.Provider>
          {children}
       </TestComponent.Provider>
    )
}

