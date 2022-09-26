// import { StyleSheet, Text, View } from "react-native";
import React from "react";
import "../css/style.css";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaSnapchat,
} from "react-icons/fa";

export default function Footer() {
  return (
    // <View>
    //   <Text>Footer</Text>
    // </View>
    <div>
      {/* HTML CSSResult Skip Results Iframe EDIT ON */}
      <div class="footer-dark">
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Web design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Hosting</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-6 item text">
                <h3>Company Name</h3>
                <p>
                  Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                  Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                  quis tristique lectus. Aliquam in arcu eget velit pulvinar
                  dictum vel in justo.
                </p>
              </div>
              <div class="col item social">
                <a href="#">
                  {/* <i class="icon ion-social-facebook"></i> */}
                  <FaFacebookF />
                </a>
                <a href="#">
                  {/* <i class="icon ion-social-twitter"></i> */}
                  <FaTwitter />
                </a>
                <a href="#">
                  {/* <i class="icon ion-social-snapchat"></i> */}
                  <FaSnapchat />
                </a>
                <a href="#">
                  {/* <i class="icon ion-social-instagram"></i> */}
                  <FaInstagram />
                </a>
              </div>
            </div>
            <p class="copyright">Company Name © 2018</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

// const styles = StyleSheet.create({});
