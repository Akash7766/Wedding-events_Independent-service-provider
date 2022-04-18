import React from "react";

const Blogs = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center text-primary my-5">My Blogs</h2>

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100 shadow">
            <div class="card-body">
              <h5 class="card-title">
                Difference between authorization and authentication
              </h5>
              <p class="card-text">
                Authentication verifies who the user is.Authentication works
                through passwords, one-time pins, biometric information, and
                other information provided or entered by the user.uthentication
                is the first step of a good identity and access management
                process. <br /> <br />
                Authorization determines what resources a user can
                access.Authorization works through settings that are implemented
                and maintained by the organization.Authorization isn’t visible
                to or changeable by the user.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow">
            <div class="card-body">
              <h5 class="card-title">Why are you using firebase?</h5>
              <p class="card-text">
                The Firebase Realtime Database lets you build rich,
                collaborative applications by allowing secure access to the
                database directly from client-side code. Have a lot less
                friction with acclaimed authentication.With Firebase, you can
                focus your time and attention on developing the best app(s)
                possible for your business. Since the operations and internal
                functions are so solid, and taken care of by the Firebase
                interface, you can spend more time developing the high quality
                app that users are going to want to use.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow">
            <div class="card-body">
              <h5 class="card-title">
                What other services does firebase provide other than
                authentication
              </h5>
              <p class="card-text">
                Cloud Messaging: Deliver and receive messages in a more reliable
                way across platforms
                <br /> Authentication: Have a lot less friction with acclaimed
                authentication
                <br /> Hosting: Deliver web content faster Remote
                <br /> Configuration: Customize your app on the go Test
                <br />
                Lab: Test in the lab instead of on your users Crash
                <br /> Reporting: Keep your app stable Realtime
                <br /> Database: Store and sync app data in realtime
                <br /> Storage: File storing made easy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
