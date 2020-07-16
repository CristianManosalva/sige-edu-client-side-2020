import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
import moment from 'moment'
import swal from 'sweetalert'
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
        data.user = user
        data.dateCommunity = moment()
        let auxPosts = posts
        auxPosts.unshift(data)
        setPosts([])
        setLoader((loader) => ({ ...loader, gettingPosts: true }))
        setTimeout(() => {
          setLoader((loader) => ({ ...loader, gettingPosts: false }))
          setPosts(auxPosts)
          setLoader((loader) => ({ ...loader, makingPost: false }))
          toggle()
        }, 200)
      })
      .catch((error) => {
        setLoader((loader) => ({ ...loader, makingPost: false }))
        console.log(error)
      })
      .finally(() => {})
  }

  const deletePost = (id) => {
    swal({
      title: 'Estas Seguro?',
      text: 'Una vez borrado la publicacion, no podrá recuperarse',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`${config.apiEndPoint}/community/delete/${id}`, {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            if (response.ok) {
              let array = [...posts]
              const index = array.findIndex((item) => item.codeCommunity == id)
              if (index >= 0) {
                swal('Publicacion eliminada con exito', {
                  icon: 'success',
                })
                console.log('Index: ', index)
                console.log('id: ', id)
                array.splice(index, 1)
                setLoader((loader) => ({ ...loader, gettingPosts: true }))
                setTimeout(() => {
                  setPosts(array)
                  setLoader((loader) => ({ ...loader, gettingPosts: false }))
                }, 1500)
              }
            }
          })
          /* .then((data) => {
            setTimeout(() => {
              setLoader((loader) => ({ ...loader, makingPost: false }))
              data.user = user
              data.dateCommunity = moment().format('YYYY-MM-DD')
              setPosts((posts) => [data, ...posts])
              toggle()
            }, 2000)
          }) */
          .catch((error) => {
            setLoader((loader) => ({ ...loader, makingPost: false }))
            console.log(error)
          })
          .finally(() => {})
      }
    })
  }

  const DDdeletePost = (id) => {
    swal({
      title: 'Estas Seguro?',
      text: 'Una vez borrado la publicacion, no podrá recuperarse',
      icon: 'warning',
      buttons: ['Cancelar'],
      dangerMode: true,
    }).then((name) => {
      console.log('Name: ', name)
      return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`)
    })
    /* .then((results) => {
        return results.json()
      })
      .then((json) => {
        const movie = json.results[0]

        if (!movie) {
          return swal('No movie was found!')
        }

        const name = movie.trackName
        const imageURL = movie.artworkUrl100

        swal({
          title: 'Top result:',
          text: name,
          icon: imageURL,
        })
      })
      .catch((err) => {
        if (err) {
          swal('Oh noes!', 'The AJAX request failed!', 'error')
        } else {
          swal.stopLoading()
          swal.close()
        }
      }) */
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
        }, 200)
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
                {!gettingPosts &&
                  posts.length > 0 &&
                  posts.map((value, key) => {
                    return (
                      <Post
                        hostUser={user}
                        deletePost={deletePost}
                        post={value}
                        key={key}
                      />
                    )
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
