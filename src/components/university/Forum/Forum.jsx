import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
import moment from 'moment'
import swal from 'sweetalert'
import { Row, Button } from 'reactstrap'
import { Modal, CreateFeed, Feed } from 'components'
import { config } from '_config'

const Forum = ({ codeAcademicCharge }) => {
  const [modal, setModal] = useState(false)
  const [posts, setPosts] = useState([])
  const [loader, setLoader] = useState({
    makingPost: false,
    gettingPosts: true,
  })
  const { user } = useSelector((state) => state.authentication.user.user_data)
  const toggle = () => setModal(!modal)

  const makePost = (description_feed) => {
    setLoader((loader) => ({ ...loader, makingPost: true }))
    console.log('Calling ', makingPost)
    const newPost = {
      title_feed: 'Generic title',
      description_feed: description_feed,
      user: user.documentIdUser,
      academic_charge: codeAcademicCharge,
    }
    console.log('Post ', newPost)
    fetch(`${config.apiEndPoint}/forum/create/`, {
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
        data.date_feed = moment()
        let auxPosts = posts
        auxPosts.unshift(data)
        setPosts([])
        setLoader((loader) => ({ ...loader, gettingPosts: true }))
        setTimeout(() => {
          setLoader((loader) => ({ ...loader, gettingPosts: false }))
          setPosts(auxPosts)
          setLoader((loader) => ({ ...loader, makingPost: false }))
          toggle()
        }, 100)
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
        fetch(`${config.apiEndPoint}/forum/delete/${id}`, {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            if (response.ok) {
              let array = [...posts]
              const index = array.findIndex((item) => item.code_feed == id)
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
                }, 300)
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
            swal(
              'Upss!!',
              'Ocurrio un error al borrar tu publicación, contacta a soporte :)',
              'error'
            )
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

  const getFeedsByAcademicCharge = async (codeAcademicCharge) => {
    try {
      let feeds = await fetch(
        `${config.apiEndPoint}/forum/byAcademicCharge/${codeAcademicCharge}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      ).then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener los feed')
        }
        return response.json()
      })
      setPosts(feeds)
    } catch (error) {
      console.log(error)
    }
    setLoader((loader) => ({ ...loader, gettingPosts: false }))
  }

  useEffect(() => {
    getFeedsByAcademicCharge(codeAcademicCharge)
  }, [])

  const { makingPost, gettingPosts } = loader

  return (
    <div>
      <Modal show={modal} toggle={toggle} title="Comparte con tu grupo">
        <CreateFeed loader={makingPost} makePost={makePost} toggle={toggle} />
      </Modal>
      <Row>
        <div
          className="col-12 col-lg-10 offset-lg-1"
          style={{ marginTop: '20px', marginBottom: '20px' }}
        >
          <Button
            onClick={toggle}
            color="primary"
            size="sm"
            style={{
              borderRadius: '6px',
            }}
          >
            <i
              className="fa fa-bullhorn mr-1" /* style={{ fontSize: '19px' }} */
            />
            Crear Publicación
          </Button>
        </div>
        <div className="col-12 col-lg-10 offset-lg-1">
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
                <Feed
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
                Tu Comunidad aun no ha hecho publicaciones, se el primero!!
              </span>
            </div>
          )}
          {/* hasta aqui iran las publicaciones */}
        </div>
      </Row>
    </div>
  )
}

export default Forum
