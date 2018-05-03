import React from 'react'
import { connect } from 'react-redux'
import { ArticleUI } from '../../ui/molecules'
import { Loader } from '../loader'
import { fetchArticles } from './action'

export class ArticlesRaw extends React.PureComponent {

  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const { articles, loading } = this.props;
    const items = articles.map((item) => {
      return (
        <ArticleUI
          key={item.id}
          {...item}
        />
      )
    })
    return (
      <Loader loading={loading}>
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