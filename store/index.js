const cookieparser = process.server ? require('cookieparser') : undefined

// 在服务端渲染期间运行都是同一个实例
// 定义函数 为了防止数据冲突
export const state = () => {
	return {
		user: null
	}
}

export const mutations = {
	setUser (state, data) {
		state.user = data
	}
}

export const actions = {
	// 初始化容器数据 服务端渲染期间自动调用
	nuxtServerInit ({ commit }, { req }) {
		let user = null
		if (req.headers.cookie) {
		  const parsed = cookieparser.parse(req.headers.cookie)
		  try {
			user = JSON.parse(parsed.user)
		  } catch (err) {
			// No valid cookie found
		  }
		}
		commit('setUser', user)
	  }
}
