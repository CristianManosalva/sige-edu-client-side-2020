import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
import moment from 'moment'
import { Row, Col, Button } from 'reactstrap'
import { Modal, CreatePost, Post } from 'components'
import { config } from '_config'

const Wall = () => {
  const [modal, setModal] = useState(false)
  const [posts, setPosts] = useState([])
  const [loader, setLoader] = useState({
    makingPost: false,
    gettingPosts: true,
  })
  const { user } = useSelector((state) => state.authentication.user.user_data)
  const toggle = () => setModal(!modal)

  const makePost = (content) => {
    setLoader((loader) => ({ ...loader, makingPost: true }))
    console.log('Calling ', makingPost)
    const newPost = {
      descriptionCommunity: content,
      titleCommunity: 'Generic Title',
      user: user.documentIdUser,
    }
    console.log('Post ', newPost)
    fetch(`${config.apiEndPoint}/community/create/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setLoader((loader) => ({ ...loader, makingPost: false }))
          data.user = user
          data.dateCommunity = moment().format('YYYY-MM-DD')
          setPosts((posts) => [data, ...posts])
          toggle()
        }, 2000)
      })
      .catch((error) => {
        setLoader((loader) => ({ ...loader, makingPost: false }))
        console.log(error)
      })
      .finally(() => {})
  }

  const getPostByIe = (codeIE) => {
    fetch(`${config.apiEndPoint}/community/byIE/${codeIE}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setLoader((loader) => ({ ...loader, gettingPosts: false }))
          setPosts(data.reverse())
        }, 2000)
      })
      .catch((error) => {
        setLoader((loader) => ({ ...loader, gettingPosts: false }))
        console.log(error)
      })
      .finally(() => {})
  }

  useEffect(() => {
    getPostByIe(user.codeIE)
  }, [])

  const { makingPost, gettingPosts } = loader

  return (
    <div>
      <Modal show={modal} toggle={toggle} title="Comparte con tu comunidad">
        <CreatePost loader={makingPost} makePost={makePost} toggle={toggle} />
      </Modal>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">Mi Comunidad</h1>
              </div>
            </div>

            {/* <div className="col-xl-12"> */}
            {/*Hice un wrapper adicional con esta fila  */}
            <Row>
              {/* <div className="col-6 offset-3"> */}
              <div className="col-3">
                <section className="box" style={{ borderRadius: '10px' }}>
                  {/* <header className="panel_header">
                    <p className="title float-left">
                      ¿Tienes algo para compartir?
                    </p>
                  </header> */}
                  <div className="content-body">
                    <div className="row">
                      <div className="col-12">
                        <h4 style={{ textAlign: 'center' }}>
                          Informacion Destacada
                        </h4>
                      </div>
                      <div className="col-12">
                        <p>
                          Aqui encontraras informacion que los directivos de tu
                          institucion necesiten comunicar a todos.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-6" style={{ border: '0px solid red' }}>
                <section className="box ">
                  <header className="panel_header">
                    <h2 className="title float-left">
                      <i
                        className="fa fa-bullhorn mr-3"
                        style={{ fontSize: '1.6rem' }}
                      ></i>
                      Escucha Tu Comunidad{' '}
                    </h2>
                  </header>
                  <div className="content-body">
                    <div className="row">
                      <div className="col-12">
                        {/* <Studentslist students={students} /> */}
                        <p>
                          Aqui encontraras el conocimento que los docentes y
                          directivos de tu institucion quieren compartir con
                          todos.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* De aqui en adelante iran las publicaciones */}
                {gettingPosts && (
                  <div
                    style={{
                      width: '100%',
                      height: '100',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Loader
                      type="BallTriangle"
                      color="#1EAEDF"
                      secondaryColor="Green"
                      height="100"
                      width="100"
                    />
                    <span
                      style={{
                        fontSize: '1.3rem',
                        marginTop: '.8rem',
                        color: '#1EAEDF',
                      }}
                    >
                      Conocimento...
                    </span>
                  </div>
                )}
                {posts.length > 0 &&
                  posts.map((value, key) => {
                    return <Post post={value} key={key} />
                  })}
                {posts.length == 0 && !gettingPosts && (
                  <div
                    style={{
                      width: '100%',
                      height: '100',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '1rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1.3rem',
                        marginTop: '.8rem',
                        textAlign: 'center',
                      }}
                    >
                      Tu Comunidad aun no ha hecho publicaciones, se el
                      primero!!
                    </span>
                  </div>
                )}
                {/* hasta aqui iran las publicaciones */}
              </div>
              <div className="col-3">
                <section className="box" style={{ borderRadius: '10px' }}>
                  {/* <header className="panel_header">
                    <p className="title float-left">
                      ¿Tienes algo para compartir?
                    </p>
                  </header> */}
                  <div className="content-body">
                    <div className="row">
                      <div className="col-12">
                        <h4 style={{ textAlign: 'center' }}>
                          ¿Tienes algo para compartir?
                        </h4>
                      </div>
                      <div className="col-12">
                        <div
                          className="share_contaiener"
                          style={{ textAlign: 'center' }}
                        >
                          <Button
                            style={{
                              borderRadius: '10px',
                              backgroundColor: '#1EAEDF',
                            }}
                            color="primary"
                            onClick={toggle}
                          >
                            Compartir
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Wall
