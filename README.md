# Coinbase API Tester

For Coinbase API v1.

## Purpose

This repo contains scripts to allow you to easily hit Coinbase API endpoints
to see the actual response returned by the API. This is useful for quickly
exploring how the Coinbase API works. Each script contains any sample input
data needed, making it fast and easy to try the API endpoints.

**_Please use only with Coinbase Sandbox accounts. Some examples contain
destructive actions such as deleting an account or sending funds away
from an account._**

https://sandbox.coinbase.com

## Set Up

1. Create a Coinbase Sandbox account at https://sandbox.coinbase.com
2. Create and enable an API key pair:
    - Visit https://www.coinbase.com/settings/api, click `New API Key`,
    under Accounts check `all`, under Permissions check `all`.
    - Click `enable` next to the newly created API credentials and enter
    `0000000` when prompted for the verification code.
    - Click on the API key to view your API Key and API Secret.
   _Note that we are allowing `all` accounts and `all` permissions
    to make testing easier. On a production app, you should allow only the
    accounts and permissions that your app requires._
3. Add your API key and secret to `/client.js`.

## Usage

Change into the `methods` directory and run the file for the method you want
to call. The response will be logged to the console. For example:

    cd methods
    node accounts/01_list_accounts.js

## License & Disclaimer

This code is released under the MIT License. It may be subtly broken or buggy. Please take the following message to heart:

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.