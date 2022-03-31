import React, { Component } from 'react';

class ErrorBound extends Component {
    constructor()
    {
        super()
        this.state={
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError:true
        }
    }

    componentDidCatch(error, info){
        console.log(info);
    }

    render() {
        return (
            <div>
                {
                    this.state.hasError ? 
                    <h2>Something went wrong.</h2>
                    : this.props.children
                }
            </div>
        );
    }
}

export default ErrorBound;