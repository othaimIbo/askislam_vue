<template>
  <footer>
  <div class="footer">
    <div class="footer-row">
      <div class="item">
        <h3>About Us</h3>
        <ul>
          <li><a href="#">Mission</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="item">
        <h3>Explore</h3>
        <ul>
          <li><a href="#">Articles</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Resources</a></li>
        </ul>
      </div>
      <div class="item">
        <h3>Community</h3>
        <ul>
          <li><a href="#">Forums</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Join Us</a></li>
        </ul>
      </div>
      <div class="item">
        <h3>Follow Us</h3>
        <ul class="social-list">
          <li class="social">
            <a href="#">
              <i class="fa fa-youtube"></i>
              youtube
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-twitter"></i>
              twitter
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-facebook"></i>
              facebook
            </a>
          </li>
        </ul>
      </div>

    </div>

    <div class="bottom-item">
      <p class="copyright">AskIslam © 2023</p>
    </div>
  </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  width: 100%;
}

footer a {
  color: #fff;
  text-decoration: none;
}

footer a:hover {
  color: #0dab1f;
}

.footer {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.item {
  flex: 1;
  margin: 10px;
  text-align: left;
}

.item h3 {
  margin-bottom: 10px;
  color: #00dc1a;
}

.item ul {
  list-style-type: none;
  padding: 0;
}

.item ul li {
  margin-bottom: 8px;
}

.social a {
  margin-right: 10px;
}

.bottom-item {
  align-items: center;
}

.bottom-item a:hover {
  color: #0dab1f;
}

.copyright {
  margin-top: 20px;
  font-size: 14px;
}

.item ul.social-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
.item ul.social-list li {
  box-sizing: border-box;
  padding: 10px 0;
  width: 45%;
}

@media screen and (max-width: 600px) {
  .footer {
    margin: 0 auto;
    padding: 10px;
  }

  .row {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }

  .item {
    flex: none;
    margin: 0 auto;
    text-align: left;
    width: 50%;
  }
  .item ul.social-list li {
    width: 100%;
  }
}
</style>