import React from "react";
import "./NewsDetails.css";
import {
  FaRegUserCircle,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
  FaEnvelope,
  FaCloud,
  FaCalendarAlt,
} from "react-icons/fa";

const NewsDetails = () => {
  const base = "newsDetails";

  const relatedPosts = [
    {
      id: 1,
      title: "Promised Academic Excellence",
      text: "Dream Flower Pre School encourages joyful learning through guided classroom activities, communication practice, early concepts, and child-friendly routines that support strong academic readiness from the beginning.",
      date: "Dec 29, 2022",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "Creative & Smart Preschool Curriculum",
      text: "Our preschool curriculum is designed to balance play, creativity, and structured learning so children can build confidence, curiosity, and essential early skills in a warm and engaging environment.",
      date: "Dec 29, 2022",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "Safe & Secured Play Equipment",
      text: "A safe environment is a key part of early education. We provide supervised activities and child-friendly play spaces where children can enjoy learning, movement, and exploration with comfort and care.",
      date: "Dec 29, 2022",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className={base}>
      <div className={`${base}__container`}>
        <div className={`${base}__heroWrap`}>
          <img
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1400&q=80"
            alt="Teacher with children in classroom"
            className={`${base}__heroImage`}
          />
        </div>

        <div className={`${base}__metaRow`}>
          <div className={`${base}__authorMeta`}>
            <FaRegUserCircle className={`${base}__authorIcon`} />
            <div className={`${base}__authorText`}>
              <span className={`${base}__authorLabel`}>Written by</span>
              <h6 className={`${base}__authorName`}>Admin</h6>
            </div>
          </div>

          <div className={`${base}__date`}>Jul 10, 2021</div>
        </div>

        <div className={`${base}__divider`}></div>

        <div className={`${base}__content`}>
          <h2 className={`${base}__title`}>An Overview</h2>

          <p className={`${base}__lead`}>
            Dream Flower Pre School & Day Care focuses on building a joyful
            learning environment where every child feels safe, valued, and
            encouraged to grow. Our classrooms are designed to support curiosity,
            confidence, and early learning through guided activities,
            communication, and creative classroom experiences.
          </p>

          <h3 className={`${base}__subTitle`}>
            Elevate your Child’s Learning Standards
          </h3>

          <p className={`${base}__paragraph`}>
            At Dream Flower Pre School, our goal is to make learning enjoyable
            and meaningful for every child. We introduce children to a balanced
            mix of classroom routines, playful learning, storytelling, art,
            music, and activity-based lessons that support social, emotional,
            and academic development.
          </p>

          <p className={`${base}__paragraph`}>
            Our teaching approach is simple, practical, and child-friendly. We
            pay attention to each learner’s comfort, communication, behavior,
            and readiness for the next stage. Through daily interaction and
            structured guidance, children in Play Group, Nursery, LKG, and UKG
            receive the support they need to grow with happiness and confidence.
          </p>

          <div className={`${base}__splitSection`}>
            <div className={`${base}__splitImageWrap`}>
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1000&q=80"
                alt="Teacher guiding children during creative activity"
                className={`${base}__splitImage`}
              />
            </div>

            <div className={`${base}__splitContent`}>
              <h3 className={`${base}__subTitle`}>
                Making a Change in Early Education
              </h3>

              <p className={`${base}__paragraph`}>
                Quality preschool education creates a strong foundation for the
                future. At Dream Flower Pre School & Day Care, we create daily
                learning experiences that help children become more expressive,
                attentive, and independent.
              </p>

              <p className={`${base}__paragraph`}>
                Our classrooms encourage participation, imagination, and routine.
                Whether children are learning through play, drawing, songs,
                number work, or simple group activities, they are supported by a
                nurturing environment that values progress at every stage.
              </p>
            </div>
          </div>

          <p className={`${base}__paragraph`}>
            Parents often look for a preschool that offers both warmth and
            quality learning. Our approach brings both together by creating a
            secure and engaging setting where children can feel comfortable,
            active, and motivated to learn every day.
          </p>

          <div className={`${base}__divider ${base}__divider--dashed`}></div>

          <blockquote className={`${base}__quote`}>
            Early childhood is the stage where confidence, communication,
            discipline, and curiosity begin to take shape. A caring preschool
            environment helps children grow naturally while building strong
            learning habits for the future.
          </blockquote>

          <div className={`${base}__divider ${base}__divider--dashed`}></div>

          <div className={`${base}__consultancy`}>
            <h3 className={`${base}__subTitle`}>Consultancy Solutions</h3>

            <ul className={`${base}__list`}>
              <li className={`${base}__listItem`}>
                <FaCloud className={`${base}__listIcon`} />
                <span>
                  Play-based learning methods that help children stay active,
                  curious, and comfortable in class.
                </span>
              </li>

              <li className={`${base}__listItem`}>
                <FaCloud className={`${base}__listIcon`} />
                <span>
                  Child-friendly teaching for Play, Nursery, LKG, and UKG with
                  focus on confidence and communication.
                </span>
              </li>

              <li className={`${base}__listItem`}>
                <FaCloud className={`${base}__listIcon`} />
                <span>
                  A safe and supportive environment where children learn through
                  routine, care, and creative activities.
                </span>
              </li>

              <li className={`${base}__listItem`}>
                <FaCloud className={`${base}__listIcon`} />
                <span>
                  Strong early learning foundation through stories, music, art,
                  classroom interaction, and guided practice.
                </span>
              </li>
            </ul>
          </div>

          <div className={`${base}__tagsShareRow`}>
            <div className={`${base}__tagsWrap`}>
              <h5 className={`${base}__tagsTitle`}>Tags:</h5>
              <div className={`${base}__tagList`}>
                <span className={`${base}__tag`}>Nursery</span>
                <span className={`${base}__tag`}>Pre-Primary</span>
              </div>
            </div>

            <div className={`${base}__shareWrap`}>
              <span className={`${base}__shareLabel`}>Share:</span>
              <div className={`${base}__socials`}>
                <a href="/" onClick={(e) => e.preventDefault()}>
                  <FaFacebookF />
                </a>
                <a href="/" onClick={(e) => e.preventDefault()}>
                  <FaTwitter />
                </a>
                <a href="/" onClick={(e) => e.preventDefault()}>
                  <FaGooglePlusG />
                </a>
                <a href="/" onClick={(e) => e.preventDefault()}>
                  <FaPinterestP />
                </a>
                <a href="/" onClick={(e) => e.preventDefault()}>
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`${base}__authorCard`}>
          <div className={`${base}__authorCardIconWrap`}>
            <FaRegUserCircle className={`${base}__authorCardIcon`} />
          </div>

          <div className={`${base}__authorCardContent`}>
            <span className={`${base}__authorCardLabel`}>About Author</span>
            <h4 className={`${base}__authorCardName`}>Admin</h4>
            <p className={`${base}__authorCardText`}>
              Dream Flower Pre School & Day Care shares school updates, child
              development insights, activity highlights, and learning methods
              through our news section so parents can stay connected with
              meaningful preschool information.
            </p>
          </div>
        </div>

        <div className={`${base}__commentBox`}>
          <h3 className={`${base}__commentTitle`}>Comment ( 1 )</h3>

          <div className={`${base}__commentItem`}>
            <div className={`${base}__commentAvatarWrap`}>
              <FaRegUserCircle className={`${base}__commentAvatar`} />
            </div>

            <div className={`${base}__commentContent`}>
              <h5 className={`${base}__commentName`}>Prabha</h5>
              <span className={`${base}__commentDate`}>
                Jan 02, 2023 at 8:52 am
              </span>
              <p className={`${base}__commentText`}>
                The learning environment looks warm and child-friendly. It is
                nice to see a preschool that focuses on both care and structured
                learning. The activity-based approach is very helpful for young
                children.
              </p>
            </div>
          </div>

          <div className={`${base}__commentDivider`}></div>

          <p className={`${base}__commentClosed`}>Comments are closed.</p>
        </div>

        <div className={`${base}__relatedSection`}>
          <h2 className={`${base}__relatedTitle`}>Related Posts</h2>

          <div className={`${base}__relatedList`}>
            {relatedPosts.map((post, index) => (
              <div
                key={post.id}
                className={`${base}__relatedItem ${
                  index !== relatedPosts.length - 1
                    ? `${base}__relatedItem--border`
                    : ""
                }`}
              >
                <div className={`${base}__relatedImageWrap`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className={`${base}__relatedImage`}
                  />

                  <div className={`${base}__relatedDateBox`}>
                    <FaCalendarAlt className={`${base}__relatedDateIcon`} />
                    <span>{post.date.split(",")[0]},</span>
                    <span>{post.date.split(",")[1]?.trim()}</span>
                  </div>
                </div>

                <div className={`${base}__relatedContent`}>
                  <h3 className={`${base}__relatedPostTitle`}>{post.title}</h3>
                  <p className={`${base}__relatedText`}>{post.text}</p>
                  <a
                    href="/"
                    onClick={(e) => e.preventDefault()}
                    className={`${base}__readMore`}
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${base}__storyNav`}>
          <div className={`${base}__storyCard`}>
            <div className={`${base}__storyLeft`}>
              <span className={`${base}__storyLabel`}>Previous Story</span>
              <h4 className={`${base}__storyTitle`}>No story to show!</h4>
            </div>

            <div className={`${base}__storyDivider`}></div>

            <div className={`${base}__storyRight`}>
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500&q=80"
                alt="Next story"
                className={`${base}__storyThumb`}
              />
              <div className={`${base}__storyRightContent`}>
                <span className={`${base}__storyLabel`}>Next Story</span>
                <h4 className={`${base}__storyTitle`}>
                  Kids Vibrant And Engaging School
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetails;