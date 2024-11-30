import {Component} from 'preact';
import {LocationProvider, Route, Router, lazy} from 'preact-iso';

const Home = lazy(() => import('./home'));
const NotFound = lazy(() => import('./404'));

export default class extends Component {
    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        return (
            <LocationProvider>
                <Router>
                    <Route path="/" component={Home} />
                    <NotFound default />
                </Router>
            </LocationProvider>
        );
    }
}
