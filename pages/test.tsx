import React from 'react'
import { NextPageContext } from 'next';
import Link from 'next/link';


interface TestPageProps {
    slug: string;
}

interface TestPageState {
    mounted: boolean;
}

class Test extends React.Component<TestPageProps, TestPageState> {

    static async getInitialProps(context: NextPageContext): Promise<TestPageProps> {
        const slug = context.query.slug as string;
        return {
            slug: slug,
        };
    }

    constructor(props: TestPageProps) {
        super(props);
        this.state = {
            mounted: false,
        }
    }

    componentDidMount() {
        this.setState({
            mounted: true,
        });
    }

    render() {
        const { slug } = this.props;
        const { mounted } = this.state;
        return (
            <>
                {mounted && <iframe src={`/b?slug=${slug}`} />}
                <div>
                    We got slug {slug}
                </div>
                <Link as="/test/a" href="/test?slug=a"><a>Link to slugA</a></Link><br />
                <Link as="/test/b" href="/test?slug=b"><a>Link to slugB</a></Link>
            </>
        );
    }
}

export default Test;