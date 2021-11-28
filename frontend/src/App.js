import React from "react";
import { Box, TextField, Button } from '@mui/material';
import axios from "axios";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      site_url: "",
      feed_url: "",
      // accuracy: { type: "", value: 0 }, 
      accuracy: 0,
      result: false
    }
  }
  urlFetcher = () => {
    let url = "";
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      console.log(request)
      if (request.message === "RECIEVE URL") {
        this.setState({ site_url: request.url, feed_url: request.url })
      }
    })
    chrome.runtime.sendMessage({ message: "GET URL" })
    this.setState({ site_url: url, feed_url: url })
  }

  onChangeUrl = (event) => {
    this.setState({ feed_url: event.target.value })
  }

  checkUrl = (url) => {
    const baseUrl = ""
    axios.get(baseUrl + url)
      .then(response => {
        //Condition if it is phising website or not, Also what is accuracy for the result 
      })
  }

  componentDidMount() {
    this.urlFetcher();
  }

  render() {
    const { loading, site_url, feed_url, accuracy, result } = this.state;
    return (
      <Box>
        <TextField id="url_input" variant="outlined" onChange={this.onChangeUrl} value={feed_url} />
        <div>
          <Button variant="text" onClick={() => this.checkUrl(site_url)}>This Website</Button>
          <Button variant="contained" onClick={() => this.checkUrl(feed_url)}>From Feed</Button>
        </div>
      </Box>
    )
  }
}

export default App;