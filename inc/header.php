<header class="page_header">
    <div class="container">
        <div class="header_content">
            <a href="#" class="main_logo">Home</a>
            <nav class="main_navigation">
                <ul class="menu_links">
                    <li><a href="/index.php">Home</a></li>
                    <li><a href="/about.php">About</a></li>
                    <li>
                        <a href="#">Services <span class="arrow_icon itodown"></span></a>
                        <ul class="submenu submenu1">
                            <li><a href="#">Basic</a></li>
                            <li>
                                <a href="#">Advance <span class="arrow_icon itoright"></span></a>
                                <ul class="submenu submenu2">
                                    <li><a href="#" class="clickTest">Click</a></li>
                                    <li><a href="#" class="generateBtn">Generate</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Premium</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="/blog.php" id="fixIt">FixIt</a></li>
                    <li><a href="/contact.php">Contact</a></li>
                    <li><a href="/dashboard.php">Dashboard</a></li>
                    <?php
                        if (isset($_SESSION['student_id'])) {
                            echo '<li><a href="inc/logout.php">Logout</a></li>';
                        }
                        else {
                            echo '<li><a href="/login.php">Login</a></li>';
                        }
                    ?>
                </ul>
            </nav>
            <button class="menuToggle">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</header>