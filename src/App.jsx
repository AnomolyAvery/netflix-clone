import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';

import requests from './requests';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="app">
                <Nav />
                <Banner />
                <Row
                    title="Netflix Orginials"
                    fetchUrl={requests.fetchNetflixOriginals}
                    isLargeRow
                />
                <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
                <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
                <Row
                    title="Action Movies"
                    fetchUrl={requests.fetchActionMovies}
                />
                <Row
                    title="Comedy Movies"
                    fetchUrl={requests.fetchComedyMovies}
                />
                <Row
                    title="Horror Movies"
                    fetchUrl={requests.fetchHorrorMovies}
                />
                <Row
                    title="Romance Movies"
                    fetchUrl={requests.fetchRomanceMovies}
                />
                <Row
                    title="Documentaries"
                    fetchUrl={requests.fetchDocumentaries}
                />
            </div>
        </QueryClientProvider>
    );
}

export default App;
