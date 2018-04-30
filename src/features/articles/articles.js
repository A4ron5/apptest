import React, {Component} from 'react'
import { connect } from 'react-redux'
import { ArticleUI } from '../../ui/molecules'
import { Loader } from '../loader'
import { fetchArticles } from './action'

export class ArticlesRaw extends Component {

  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const items = this.props.articles.map((item) => {
      return (
        <ArticleUI
          key={item.id}
          title={item.title}
          info={item.text}
        />
      )
    })
    return (
      <Loader loading={this.props.loading}>
        {items}
      </Loader>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles.articles,
    loading: state.articles.isFetching
  }
}

export const Articles = connect(mapStateToProps, {fetchArticles})(ArticlesRaw)