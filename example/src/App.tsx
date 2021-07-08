import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'

import { Avatar } from 'react-profile-avatar'
import 'react-profile-avatar/dist/index.css'

const App = () => {

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'>
          <div style={{width:'100%'}}>
              <ul className='navbar-nav ml-lg-5'>
                  <li className='nav-item mr-lg-3'>
                      <a className={'nav-link active'} href='.'>Examples</a>
                  </li>
                  <li className='nav-item mr-lg-3'>
                      <a className={'nav-link'} href='http://github.com/darylbuckle/react-profile-avatar'>Documentation</a>
                  </li>
              </ul>
          </div>
      </nav>

      <div className='container' style={{marginTop:'100px'}}>
        <h1 className='mb-5'>react-profile-avatar examples</h1>

        <div className='mt-3 mb-5'>
          <h2 className='mb-4'>Minimal</h2>
          <div className='row'>
            <div className='col-md-6'>
              <p>
                Parse just the "name" prop to get a basic avatar;
              </p>
              <pre>
                {'name=\'John Doe\''}
              </pre>
            </div>
            <div className='col-md-6'>
              <Avatar 
                name={'John Doe'}
              />
            </div>
          </div>
        </div>

        <div className='mt-3 mb-5'>
          <h2 className='mb-4'>Specify Colour</h2>
          <div className='row'>
            <div className='col-md-6'>
              <p>
                Parse the "colour" prop to change the background colour.
                This should be in hex format including the #. E.g #FF0000.
              </p>
              <pre>
                {'name=\'John Doe\''}
                <br />
                {'colour=\'#FF0000\''}
              </pre>
            </div>
            <div className='col-md-6'>
              <Avatar 
                name={'John Doe'}
                colour={'#FF0000'}
              />
            </div>
          </div>
        </div>

        <div className='mt-3 mb-5'>
          <h2 className='mb-4'>Override Initials</h2>
          <div className='row'>
            <div className='col-md-6'>
              <p>
                Parse the "initials" prop to alter the initials in the Avatar.
              </p>
              <pre>
                {'name=\'John Doe\''}
                <br />
                {'initials=\'123\''}
                <br />
                {'colour=\'#FF0000\''}
              </pre>
            </div>
            <div className='col-md-6'>
              <Avatar 
                name={'John Doe'}
                initials={'123'}
                colour={'#FF0000'}
              />
            </div>
          </div>
        </div>

        <div className='mt-3 mb-5'>
          <h2 className='mb-4'>Use an Image</h2>
          <div className='row'>
            <div className='col-md-6'>
              <p>
                Set "imageSrc" equal to the url of an image to show the image instead of initials.
                This can also be a base64 string.
              </p>
              <pre>
                {'name=\'John Doe\''}
                <br />
                {'imageSrc=\'https://darylbuckle.dev/angular-dev-portfolio/assets/images/profile.png\''}
              </pre>
            </div>
            <div className='col-md-6'>
              <Avatar 
                name={'John Doe'}
                imageSrc={'https://darylbuckle.dev/angular-dev-portfolio/assets/images/profile.png'}
              />
            </div>
          </div>
        </div>

        <div className='mt-3 mb-5'>
          <h2 className='mb-4'>Re-size the Avatar</h2>
          <div className='row'>
            <div className='col-md-6'>
              <p>
                Set "size" equal to a number to change the size of the Avatar.
                This expects the size in pixels.
              </p>
              <pre>
                {'name=\'John Doe\''}
                <br />
                {'imageSrc=\'https://darylbuckle.dev/angular-dev-portfolio/assets/images/profile.png\''}
                <br />
                {'size=100'}
              </pre>
            </div>
            <div className='col-md-6'>
              <Avatar 
                name={'John Doe'}
                imageSrc={'https://darylbuckle.dev/angular-dev-portfolio/assets/images/profile.png'}
                size={100}
              />
            </div>
          </div>
        </div>

        <div className='mt-3 mb-5'>
          <h2 className='mb-4'>Add a Border</h2>
          <div className='row'>
            <div className='col-md-6'>
              <p>
                Set "borderSize" equal to a number greater than 0 to add a border.
                Set "borderColour" to a hex colour to change the colour.
              </p>
              <pre>
                {'name=\'John Doe\''}
                <br />
                {'imageSrc=\'https://darylbuckle.dev/angular-dev-portfolio/assets/images/profile.png\''}
                <br />
                {'size=100'}
                <br />
                {'borderSize=5'}
                <br />
                {'borderColour=\'#ffa500\''}
              </pre>
            </div>
            <div className='col-md-6'>
              <Avatar 
                name={'John Doe'}
                imageSrc={'https://darylbuckle.dev/angular-dev-portfolio/assets/images/profile.png'}
                size={100}
                borderSize={5}
                borderColour={'#ffa500'}
              />
            </div>
          </div>
        </div>

        <div className='mt-3 mb-5'>
          <h2 className='mb-4'>On Click</h2>
          <div className='row'>
            <div className='col-md-6'>
              <p>
                Set "onClick" equal to a function to allow selecting to fire an event.
              </p>
              <pre>
                {'name=\'John Doe\''}
                <br />
                {'imageSrc=\'https://darylbuckle.dev/angular-dev-portfolio/assets/images/profile.png\''}
                <br />
                {'size=100'}
                <br />
                {'onClick=() => window.alert(\'You clicked on the avatar\')'}
              </pre>
            </div>
            <div className='col-md-6'>
              <Avatar 
                name={'John Doe'}
                imageSrc={'https://darylbuckle.dev/angular-dev-portfolio/assets/images/profile.png'}
                size={100}
                onClick={() => window.alert('You clicked on the avatar')}
              />
            </div>
          </div>
        </div>

        <div className='mt-3 mb-5'>
          <h2 className='mb-4'>Children</h2>
          <div className='row'>
            <div className='col-md-6'>
              <p>
                Parse child JSX elements to render additional components within the avatar.
                E.g this examples adds an online icon.
              </p>
            </div>
            <div className='col-md-6'>
              <Avatar 
                name={'John Doe'}
                imageSrc={'https://darylbuckle.dev/angular-dev-portfolio/assets/images/profile.png'}
                size={100}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  position: 'absolute',
                  zIndex: 1,
                  background: '#3CBC3C',
                  border: '2px solid white',
                  borderRadius: '50%',
                  textAlign: 'center',
                  right: '5px',
                  bottom: '5px'
                }} />
              </Avatar>
            </div>
          </div>
        </div>

        <div className='mt-3 mb-5'>
          <h2 className='mb-4'>CSS Customization</h2>
          <div className='row'>
            <div className='col-md-6'>
              <p>
                Use the below style and className props to alter the style of each element in the avatar.
              </p>
              <pre>
                {'style={borderRadius: \'0px\'}'}
                <br />
                {'className=\'mycustomclass\''}
                <br />
                {'borderStyle={}'}
                <br />
                {'borderClassName=\'\''}
                <br />
                {'containerStyle={}'}
                <br />
                {'containerClassName=\'\''}
                <br />
              </pre>
            </div>
            <div className='col-md-6'>
              <Avatar 
                name={'John Doe'}
                imageSrc={'https://darylbuckle.dev/angular-dev-portfolio/assets/images/profile.png'}
                size={100}
                style={{borderRadius: '0px'}}
                className={'mycustomclass'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
